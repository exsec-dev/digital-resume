import { Timeline } from "antd";
import { useTranslation } from "react-i18next";
import { TimePeriodPanel, CollapsePanel } from "components";
import { FiberManualRecord, LoadingOutlined } from "components/icons";
import { getTranslationList } from "utils/i18n";
import "./index.scss";

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
              title={t("experience.third.title")}
              subtitle={t("experience.third.subtitle")}
              period={t("experience.third.period")}
              isSmall
            />
          }
          pendingDot={<LoadingOutlined className="experience-current-dot" />}
          reverse
          items={[
            {
              dot: <FiberManualRecord className="experience-dot" />,
              color: "var(--primary-color)",
              children: (
                <TimePeriodPanel
                  title={t("experience.first.title")}
                  subtitle={t("experience.first.subtitle")}
                  period={t("experience.first.period")}
                  info={{
                    title: t("experience.tooltip"),
                    text: getTranslationList(t, "experience.first.tooltip"),
                  }}
                  isSmall
                />
              ),
            },
            {
              dot: <FiberManualRecord className="experience-dot" />,
              color: "var(--primary-color)",
              children: (
                <TimePeriodPanel
                  title={t("experience.second.title")}
                  subtitle={t("experience.second.subtitle")}
                  period={t("experience.second.period")}
                  info={{
                    title: t("experience.tooltip"),
                    text: getTranslationList(t, "experience.second.tooltip"),
                  }}
                  isSmall
                />
              ),
            },
          ]}
        />
      }
    />
  );
};
