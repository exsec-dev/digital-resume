import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import "./index.scss";

type Placement = "bottom" | "left-top" | "right-top";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement: Placement;
  variant?: "popover" | "tooltip";
  className?: string;
}

const POINTER_DELAY_MS = 100;
const VIEWPORT_PADDING = 8;
// keeps the arrow clear of the overlay rounded corners
const ARROW_INSET = 12;
// distance from the overlay top to the arrow center for side placements
const SIDE_ARROW_OFFSET = 16;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max));

export const Tooltip = ({
  children,
  content,
  placement,
  variant = "popover",
  className,
}: TooltipProps) => {
  const id = useId();
  const triggerRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const openTimerRef = useRef(0);
  const closeTimerRef = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState(() => ({
    left: 0,
    top: 0,
    arrowX: 0,
    arrowY: 0,
    placement,
  }));

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const overlay = overlayRef.current;
    if (!trigger || !overlay) return;

    // anchor to the visible content, not the wrapper span, which can be
    // stretched by the surrounding layout
    const anchor = trigger.firstElementChild ?? trigger;
    const rect = anchor.getBoundingClientRect();
    // offsetWidth/offsetHeight ignore the enter animation transform
    const width = overlay.offsetWidth;
    const height = overlay.offsetHeight;
    const gap = variant === "tooltip" ? 8 : 12;

    // everything is computed in page coordinates: the overlay is positioned
    // absolutely, so it belongs to the page and pinch zoom cannot move it
    // relative to the trigger; clientWidth/clientHeight describe the layout
    // viewport, which is also unaffected by pinch zoom
    const { scrollX, scrollY } = window;
    const viewport = {
      left: scrollX + VIEWPORT_PADDING,
      right: scrollX + document.documentElement.clientWidth - VIEWPORT_PADDING,
      top: scrollY + VIEWPORT_PADDING,
      bottom:
        scrollY + document.documentElement.clientHeight - VIEWPORT_PADDING,
    };
    const triggerLeft = rect.left + scrollX;
    const triggerRight = rect.right + scrollX;
    const triggerBottom = rect.bottom + scrollY;
    const triggerCenterX = triggerLeft + rect.width / 2;
    const triggerCenterY = rect.top + scrollY + rect.height / 2;

    let actualPlacement = placement;
    if (actualPlacement !== "bottom") {
      const fitsLeft = triggerLeft - gap - width >= viewport.left;
      const fitsRight = triggerRight + gap + width <= viewport.right;
      if (!fitsLeft && !fitsRight) {
        // neither side has room (narrow screens): drop below the trigger
        actualPlacement = "bottom";
      } else if (actualPlacement === "left-top" && !fitsLeft) {
        actualPlacement = "right-top";
      } else if (actualPlacement === "right-top" && !fitsRight) {
        actualPlacement = "left-top";
      }
    }

    let left: number;
    let top: number;
    if (actualPlacement === "bottom") {
      left = clamp(
        triggerCenterX - width / 2,
        viewport.left,
        viewport.right - width,
      );
      // never detach from the trigger: the arrow must stay inside the overlay
      left = clamp(
        left,
        triggerCenterX - width + ARROW_INSET,
        triggerCenterX - ARROW_INSET,
      );
      top = triggerBottom + gap;
    } else {
      left =
        actualPlacement === "left-top"
          ? triggerLeft - width - gap
          : triggerRight + gap;
      top = clamp(
        triggerCenterY - SIDE_ARROW_OFFSET,
        viewport.top,
        viewport.bottom - height,
      );
      // never detach from the trigger: the arrow must stay inside the overlay
      top = clamp(
        top,
        triggerCenterY - height + ARROW_INSET,
        triggerCenterY - ARROW_INSET,
      );
    }

    const arrowX = clamp(triggerCenterX - left, ARROW_INSET, width - ARROW_INSET);
    const arrowY = clamp(triggerCenterY - top, ARROW_INSET, height - ARROW_INSET);
    setLayout((prev) =>
      prev.left === left &&
      prev.top === top &&
      prev.arrowX === arrowX &&
      prev.arrowY === arrowY &&
      prev.placement === actualPlacement
        ? prev
        : { left, top, arrowX, arrowY, placement: actualPlacement },
    );
  }, [placement, variant]);

  // tracks the trigger every frame while open, so the overlay follows
  // scrolling, zooming, content resizes and layout shifts alike
  useLayoutEffect(() => {
    if (!isOpen) return;
    let frame = 0;
    const tick = () => {
      updatePosition();
      frame = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(frame);
  }, [isOpen, updatePosition]);

  const clearTimers = () => {
    window.clearTimeout(openTimerRef.current);
    window.clearTimeout(closeTimerRef.current);
  };

  useEffect(() => clearTimers, []);

  const open = () => {
    clearTimers();
    setIsOpen(true);
  };

  const scheduleOpen = () => {
    clearTimers();
    openTimerRef.current = window.setTimeout(open, POINTER_DELAY_MS);
  };

  const close = () => {
    clearTimers();
    closeTimerRef.current = window.setTimeout(
      () => setIsOpen(false),
      POINTER_DELAY_MS,
    );
  };

  const handleBlur = (event: FocusEvent) => {
    const nextTarget = event.relatedTarget;
    if (
      nextTarget instanceof Node &&
      overlayRef.current?.contains(nextTarget)
    ) {
      return;
    }
    close();
  };

  return (
    <>
      <span
        ref={triggerRef}
        className="overlay-trigger"
        aria-describedby={isOpen ? id : undefined}
        onPointerEnter={scheduleOpen}
        onPointerLeave={close}
        onFocus={open}
        onBlur={handleBlur}
      >
        {children}
      </span>
      {isOpen
        ? createPortal(
            <div
              ref={overlayRef}
              id={id}
              role={variant === "tooltip" ? "tooltip" : undefined}
              className={clsx(
                "overlay",
                `overlay--${variant}`,
                `overlay--${layout.placement}`,
                className,
              )}
              style={
                {
                  left: layout.left,
                  top: layout.top,
                  "--arrow-x": `${layout.arrowX}px`,
                  "--arrow-y": `${layout.arrowY}px`,
                } as CSSProperties
              }
              onPointerEnter={open}
              onPointerLeave={close}
              onFocus={open}
              onBlur={handleBlur}
            >
              {content}
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
