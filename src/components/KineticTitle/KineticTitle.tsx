import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.scss";

const FALLOFF_PX = 400;
const LERP_FACTOR = 0.15;
const TAP_RESET_DELAY_MS = 300;

export const KineticTitle = ({ text }: { text: string }) => {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const setBreakage = (value: number) => {
      root.style.fontVariationSettings = `"BRKS" ${value.toFixed(3)}`;
    };

    if (prefersReducedMotion) {
      setBreakage(0);
      return;
    }

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      root.style.transition = "font-variation-settings 0.6s ease-in-out";
      const observer = new IntersectionObserver(
        ([entry]) => setBreakage(entry.isIntersecting ? 0 : 1),
        { threshold: 0.5 },
      );
      observer.observe(root);

      let tapTimeoutId = 0;
      const onTap = () => {
        clearTimeout(tapTimeoutId);
        setBreakage(1);
        tapTimeoutId = window.setTimeout(() => setBreakage(0), TAP_RESET_DELAY_MS);
      };
      root.addEventListener("click", onTap);

      return () => {
        observer.disconnect();
        root.removeEventListener("click", onTap);
        clearTimeout(tapTimeoutId);
      };
    }

    let rect = root.getBoundingClientRect();
    let pointerX = -9999;
    let pointerY = -9999;
    let current = 1;
    let target = 1;
    let rafId = 0;

    const tick = () => {
      current += (target - current) * LERP_FACTOR;
      setBreakage(current);
      rafId =
        Math.abs(target - current) > 0.001 ? requestAnimationFrame(tick) : 0;
    };

    const updateTarget = () => {
      const nearestX = Math.max(rect.left, Math.min(rect.right, pointerX));
      const nearestY = Math.max(rect.top, Math.min(rect.bottom, pointerY));
      target = Math.min(
        Math.hypot(pointerX - nearestX, pointerY - nearestY) / FALLOFF_PX,
        1,
      );
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      updateTarget();
    };
    const onPointerLeave = () => {
      pointerX = -9999;
      pointerY = -9999;
      updateTarget();
    };
    const onViewportChange = () => {
      rect = root.getBoundingClientRect();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
    };
  }, [prefersReducedMotion]);

  return (
    <h1
      ref={rootRef}
      className="kinetic-title"
      aria-label={text.replaceAll("\n", " ")}
    >
      {text.split("\n").map((line, i) => (
        <span key={i} aria-hidden="true">
          {line}
        </span>
      ))}
    </h1>
  );
};
