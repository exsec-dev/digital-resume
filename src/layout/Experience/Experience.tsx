import { useTranslation } from "react-i18next";
import { TimePeriodPanel, CollapsePanel } from "components";
import { FiberManualRecord, LoadingOutlined } from "components/icons";
import { getTranslationList } from "utils/i18n";
import "./index.scss";

const EXPERIENCE_HISTORY = [
  {
    titleKey: "experience.second.title",
    subtitleKey: "experience.second.subtitle",
    periodKey: "experience.second.period",
    tooltipKey: "experience.second.tooltip",
  },
  {
    titleKey: "experience.first.title",
    subtitleKey: "experience.first.subtitle",
    periodKey: "experience.first.period",
    tooltipKey: "experience.first.tooltip",
  },
] as const;

const EXPERIENCE_CURRENT = {
  titleKey: "experience.third.title",
  subtitleKey: "experience.third.subtitle",
  periodKey: "experience.third.period",
} as const;

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <CollapsePanel
      title={t("experience")}
      content={
        <ol className="experience-timeline">
          <li className="experience-timeline-item">
            <span className="experience-timeline-dot">
              <LoadingOutlined className="experience-current-dot" />
            </span>
            <TimePeriodPanel
              title={t(EXPERIENCE_CURRENT.titleKey)}
              subtitle={t(EXPERIENCE_CURRENT.subtitleKey)}
              period={t(EXPERIENCE_CURRENT.periodKey)}
              isSmall
            />
          </li>
          {EXPERIENCE_HISTORY.map((entry) => (
            <li className="experience-timeline-item" key={entry.titleKey}>
              <span className="experience-timeline-dot">
                <FiberManualRecord className="experience-dot" />
              </span>
              <TimePeriodPanel
                title={t(entry.titleKey)}
                subtitle={t(entry.subtitleKey)}
                period={t(entry.periodKey)}
                info={{
                  title: t("experience.tooltip"),
                  text: getTranslationList(t, entry.tooltipKey),
                }}
                isSmall
              />
            </li>
          ))}
        </ol>
      }
    />
  );
};
