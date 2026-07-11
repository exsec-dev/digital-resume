import { useId, useState } from "react";
import clsx from "clsx";
import { Add, Caret } from "components/icons";
import "./index.scss";

interface TimePeriodPanelProps {
  title: string;
  subtitle: string;
  period: string;
  isSmall?: boolean;
  info?: {
    title: string;
    text: string[];
  };
}

export const TimePeriodPanel = ({
  title,
  subtitle,
  period,
  isSmall,
  info,
}: TimePeriodPanelProps) => {
  const detailsId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx("timeperiod", isSmall && "timeperiod--small")}>
      <div className="timeperiod-data">
        <span className="timeperiod-data-title">{title}</span>
        <span className="timeperiod-data-additional">{subtitle}</span>
        {info ? (
          <div
            className={clsx(
              "timeperiod-details",
              isOpen && "timeperiod-details--open",
            )}
          >
            <button
              type="button"
              className="timeperiod-details-toggle"
              aria-expanded={isOpen}
              aria-controls={detailsId}
              onClick={() => setIsOpen((value) => !value)}
            >
              {info.title}
              <Caret className="timeperiod-details-caret" />
            </button>
            <div className="timeperiod-details-content" aria-hidden={!isOpen}>
              <div className="timeperiod-details-clip">
                <ul id={detailsId} className="timeperiod-details-list">
                  {info.text.map((item, i) => (
                    <li key={i}>
                      <Add />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <hr />
      <em className="timeperiod-period">{period}</em>
    </div>
  );
};
