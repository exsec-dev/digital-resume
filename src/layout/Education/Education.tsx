import { Space } from "antd";
import { useTranslation } from "react-i18next";
import { TimePeriodPanel, CollapsePanel } from "components";
import "./index.scss";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <CollapsePanel
      title={t("education")}
      content={
        <Space className="education-list" direction="vertical" size={36}>
          <TimePeriodPanel
            title={t("education.title.master")}
            subtitle={t("education.subtitle.master")}
            period={t("education.period.master")}
          />
          <TimePeriodPanel
            title={t("education.title.bach")}
            subtitle={t("education.subtitle.bach")}
            period={t("education.period.bach")}
          />
        </Space>
      }
    />
  );
};
