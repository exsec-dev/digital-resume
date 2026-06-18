import { useLayoutEffect, useRef } from "react";
import { Typography } from "antd";
import "./index.scss";

const FALLOFF = 400;
const LERP = 0.15;

export const KineticTitle = ({ text }: { text: string }) => {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const setBrks = (v: number) =>
      (root.style.fontVariationSettings = `"BRKS" ${v.toFixed(3)}`);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBrks(0);
      return;
    }

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      root.style.transition = "font-variation-settings 0.6s ease-in-out";
      const io = new IntersectionObserver(
        ([e]) => setBrks(e.isIntersecting ? 0 : 1),
        { threshold: 0.5 },
      );
      io.observe(root);
      let t = 0;
      const onTap = () => {
        setBrks(1);
        t = window.setTimeout(() => setBrks(0), 300);
      };
      root.addEventListener("click", onTap);
      return () => {
        io.disconnect();
        root.removeEventListener("click", onTap);
        clearTimeout(t);
      };
    }

    let rect = root.getBoundingClientRect();
    let px = -9999,
      py = -9999,
      current = 1,
      target = 1,
      raf = 0;

    const tick = () => {
      current += (target - current) * LERP;
      setBrks(current);
      raf =
        Math.abs(target - current) > 0.001 ? requestAnimationFrame(tick) : 0;
    };

    const updateTarget = () => {
      const nearX = Math.max(rect.left, Math.min(rect.right, px));
      const nearY = Math.max(rect.top, Math.min(rect.bottom, py));
      target = Math.min(Math.hypot(px - nearX, py - nearY) / FALLOFF, 1);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      updateTarget();
    };
    const onLeave = () => {
      px = py = -9999;
      updateTarget();
    };
    const onViewChange = () => {
      rect = root.getBoundingClientRect();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onViewChange, { passive: true });
    window.addEventListener("resize", onViewChange);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onViewChange);
      window.removeEventListener("resize", onViewChange);
    };
  }, []);

  return (
    <Typography.Title
      ref={rootRef}
      className="kinetic-title"
      aria-label={text.replace("\n", " ")}
    >
      {text.split("\n").map((line, i) => (
        <span key={i} aria-hidden="true">
          {line}
        </span>
      ))}
    </Typography.Title>
  );
};
