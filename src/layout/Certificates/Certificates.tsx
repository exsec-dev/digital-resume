import React from "react";
import { Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { OpenInNewRounded, Add } from "@mui/icons-material";
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
              <Space key={i} size={8} align="start">
                <Add
                  style={{
                    fontSize: "18px",
                    opacity: 0.2,
                    position: "relative",
                    top: "2px",
                  }}
                />
                <Typography.Text>{item}</Typography.Text>
              </Space>
            ))}
        </Space>
      }
      defaultClosed
    />
  );
};
