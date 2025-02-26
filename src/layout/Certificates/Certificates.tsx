import React from "react";
import { Space, Typography } from "antd";
import { FiberManualRecord, OpenInNewRounded } from "@mui/icons-material";
import { CollapsePanel } from "components";
import "./index.scss";

const certificatesData = [
  "ЛЦТ 2023. Выход в финал конкурса Мэра Москвы по задаче «Рекомендательный сервис формирования персонализированных туристических пакетов»",
  "Защита проектной работы в рамках «Астра-Стипендия» 2023г., 2024г",
  "ALSE-1602 «Базовое администрирование ОС Astra Linux Special Edition»",
  "Курс «Практики системной инженерии», УрФУ",
  "English Language Test – CEFR level B2",
];

export const Certificates = () => {
  return (
    <CollapsePanel
      title={
        <>
          Certificates
          <a
            title="View Source"
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
          {certificatesData.map((item, i) => (
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
