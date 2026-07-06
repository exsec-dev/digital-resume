import { Space } from "antd";
import { useTranslation } from "react-i18next";
import { TimePeriodPanel, CollapsePanel } from "components";
import "./index.scss";

const EDUCATION = [
  {
    titleKey: "education.title.master",
    subtitleKey: "education.subtitle.master",
    periodKey: "education.period.master",
  },
  {
    titleKey: "education.title.bach",
    subtitleKey: "education.subtitle.bach",
    periodKey: "education.period.bach",
  },
] as const;

export const Education = () => {
  const { t } = useTranslation();

  return (
    <CollapsePanel
      title={t("education")}
      content={
        <Space className="education-list" direction="vertical" size={36}>
          {EDUCATION.map((entry) => (
            <TimePeriodPanel
              key={entry.titleKey}
              title={t(entry.titleKey)}
              subtitle={t(entry.subtitleKey)}
              period={t(entry.periodKey)}
            />
          ))}
        </Space>
      }
    />
  );
};
