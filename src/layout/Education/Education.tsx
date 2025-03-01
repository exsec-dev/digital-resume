import React from "react";
import { Space } from "antd";
import { useTranslation } from "react-i18next";
import { TimePeriodPanel, CollapsePanel } from "components";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <CollapsePanel
      title={t("education")}
      content={
        <Space direction="vertical" size={36} style={{ width: "100%" }}>
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
