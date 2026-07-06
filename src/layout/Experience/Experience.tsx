import { Timeline } from "antd";
import { useTranslation } from "react-i18next";
import { TimePeriodPanel, CollapsePanel } from "components";
import { FiberManualRecord, LoadingOutlined } from "components/icons";
import { getTranslationList } from "utils/i18n";
import "./index.scss";

const EXPERIENCE_HISTORY = [
  {
    titleKey: "experience.first.title",
    subtitleKey: "experience.first.subtitle",
    periodKey: "experience.first.period",
    tooltipKey: "experience.first.tooltip",
  },
  {
    titleKey: "experience.second.title",
    subtitleKey: "experience.second.subtitle",
    periodKey: "experience.second.period",
    tooltipKey: "experience.second.tooltip",
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
        <Timeline
          className="experience-timeline"
          pending={
            <TimePeriodPanel
              title={t(EXPERIENCE_CURRENT.titleKey)}
              subtitle={t(EXPERIENCE_CURRENT.subtitleKey)}
              period={t(EXPERIENCE_CURRENT.periodKey)}
              isSmall
            />
          }
          pendingDot={<LoadingOutlined className="experience-current-dot" />}
          reverse
          items={EXPERIENCE_HISTORY.map((entry) => ({
            dot: <FiberManualRecord className="experience-dot" />,
            color: "var(--primary-color)",
            children: (
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
            ),
          }))}
        />
      }
    />
  );
};
