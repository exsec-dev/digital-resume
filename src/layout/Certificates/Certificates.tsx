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
            className="icon-link"
            title={t("certificates.open")}
            href="https://drive.google.com/file/d/1IJn4ojU6juA5ZcrYcb8wbnsB8bsUzdMj/view"
            target="_blank"
            rel="noreferrer"
          >
            <OpenInNewRounded />
          </a>
        </>
      }
      content={
        <Space direction="vertical" size={8}>
          {t("certificates.list")
            .split("|")
            .map((item: string, i: number) => (
              <Space key={i} className="list-item" size={8} align="start">
                <Add />
                <Typography.Text>{item}</Typography.Text>
              </Space>
            ))}
        </Space>
      }
      defaultClosed
    />
  );
};
