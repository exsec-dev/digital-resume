import React from "react";
import { Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { FiberManualRecord, OpenInNewRounded } from "@mui/icons-material";
import { CollapsePanel } from "components";
import "./index.scss";

export const Certificates = () => {
  const { t } = useTranslation();
  return (
    <CollapsePanel
      title={
        <>
          {t("certificates")}
          <a
            title={t("certificates.open")}
            href="https://drive.google.com/file/d/1IJn4ojU6juA5ZcrYcb8wbnsB8bsUzdMj/view"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--primary-color)" }}
          >
            <OpenInNewRounded
              style={{
                fontSize: "22px",
                opacity: 0.5,
                position: "relative",
                top: "4px",
                left: "6px",
              }}
            />
          </a>
        </>
      }
      content={
        <Space direction="vertical" size={8}>
          {t("certificates.list")
            .split("|")
            .map((item: string, i: number) => (
              <Space key={i} size={14} align="start">
                <FiberManualRecord style={{ fontSize: "13px", opacity: 0.2 }} />
                <Typography.Text>{item}</Typography.Text>
              </Space>
            ))}
        </Space>
      }
      defaultClosed
    />
  );
};
