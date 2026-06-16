const SCROLL_DURATION_MS = 900;
let scrollAnimationFrameId: number | undefined;

const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - (-2 * value + 2) ** 3 / 2;

export const scrollToElement = (element: HTMLElement) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) {
    element.scrollIntoView();
    return;
  }

  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  const startedAt = performance.now();

  if (scrollAnimationFrameId) {
    cancelAnimationFrame(scrollAnimationFrameId);
  }

  const step = (currentTime: number) => {
    const progress = Math.min(
      (currentTime - startedAt) / SCROLL_DURATION_MS,
      1,
    );

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      scrollAnimationFrameId = requestAnimationFrame(step);
    } else {
      scrollAnimationFrameId = undefined;
    }
  };

  scrollAnimationFrameId = requestAnimationFrame(step);
};
