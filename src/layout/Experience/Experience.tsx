import React from "react";
import { Timeline } from "antd";
import { FiberManualRecord } from "@mui/icons-material";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { TimePeriodPanel, CollapsePanel } from "components";
import "./index.scss";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <CollapsePanel
      title={t("experience")}
      content={
        <Timeline
          style={{ marginTop: "16px" }}
          pending={
            <TimePeriodPanel
              title={t("experience.third.title")}
              subtitle="Frontend Developer"
              period={t("experience.third.period")}
              isSmall
            />
          }
          pendingDot={
            <LoadingOutlined
              style={{ color: "var(--primary-color)", opacity: 0.3 }}
            />
          }
          reverse
          items={[
            {
              dot: (
                <FiberManualRecord style={{ fontSize: "13px", opacity: 0.2 }} />
              ),
              color: "var(--primary-color)",
              children: (
                <TimePeriodPanel
                  title={t("experience.first.title")}
                  subtitle="Lead Technical Manager"
                  period={t("experience.first.period")}
                  info={{
                    title: t("experience.tooltip"),
                    text: t("experience.first.tooltip").split("|"),
                  }}
                  isSmall
                />
              ),
            },
            {
              dot: (
                <FiberManualRecord style={{ fontSize: "13px", opacity: 0.2 }} />
              ),
              color: "var(--primary-color)",
              children: (
                <TimePeriodPanel
                  title={t("experience.second.title")}
                  subtitle="Junior Frontend Developer"
                  period={t("experience.second.period")}
                  info={{
                    title: t("experience.tooltip"),
                    text: t("experience.second.tooltip").split("|"),
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
