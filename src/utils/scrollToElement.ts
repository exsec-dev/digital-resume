const MIN_DURATION_MS = 600;
const MAX_DURATION_MS = 1200;

const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value ** 3 : 1 - (-2 * value + 2) ** 3 / 2;

let cancelActiveScroll: (() => void) | null = null;

export const scrollToElement = (element: HTMLElement, offset = 0) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - offset);
    return;
  }

  cancelActiveScroll?.();

  const startY = window.scrollY;
  const distance = element.getBoundingClientRect().top - offset;
  if (!distance) return;

  const duration = Math.min(
    MAX_DURATION_MS,
    MIN_DURATION_MS + Math.abs(distance) * 0.2,
  );
  const startedAt = performance.now();
  let rafId = 0;

  const stop = () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    cancelActiveScroll = null;
  };

  const step = (now: number) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      stop();
    }
  };

  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  cancelActiveScroll = stop;
  rafId = requestAnimationFrame(step);
};
