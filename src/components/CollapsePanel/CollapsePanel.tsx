import { useId, useState, type ReactNode } from "react";
import clsx from "clsx";
import "./index.scss";

interface CollapsePanelProps {
  title: ReactNode | ((isOpen: boolean) => ReactNode);
  content: ReactNode;
  defaultClosed?: boolean;
  small?: boolean;
  className?: string;
  headerAction?: ReactNode;
  label?: string;
}

export const CollapsePanel = ({
  title,
  content,
  defaultClosed,
  small,
  className,
  headerAction,
  label,
}: CollapsePanelProps) => {
  const titleId = useId();
  const contentId = useId();
  const [isOpen, setIsOpen] = useState(!defaultClosed);

  return (
    <section
      className={clsx(
        "collapse-panel",
        small && "collapse-panel--small",
        isOpen && "collapse-panel--open",
        className,
      )}
    >
      <div className="collapse-panel-header">
        <h2 id={titleId} className="collapse-panel-title">
          {typeof title === "function" ? title(isOpen) : title}
        </h2>
        {headerAction ? (
          <span className="collapse-panel-header-action">{headerAction}</span>
        ) : null}
        <button
          className="collapse-panel-toggle"
          type="button"
          aria-label={label}
          aria-labelledby={label ? undefined : titleId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="collapse-panel-arrow" aria-hidden="true" />
        </button>
      </div>
      <div className="collapse-panel-content" aria-hidden={!isOpen}>
        <div className="collapse-panel-content-clip">
          <div id={contentId} className="collapse-panel-content-inner">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};
