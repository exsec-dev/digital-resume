import React from "react";
import { ArrowOutwardRounded } from "@mui/icons-material";
import { Typography, Image, Space } from "antd";
import { useTranslation } from "react-i18next";

export const FALLBACK_IMAGE =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyOCIgaGVpZ2h0PSI4NjgiIHZpZXdCb3g9IjAgMCAxMDI4IDg2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMjgiIGhlaWdodD0iODY4IiByeD0iNTYiIGZpbGw9IiNGRkZDRkEiLz4KPHBhdGggZD0iTTUyNi4wNjIgNDA5LjM3NUM1MjIuNzMxIDQwOS4zNzUgNTE5LjUzNSA0MDguMDUxIDUxNy4xNzkgNDA1LjY5NkM1MTQuODI0IDQwMy4zNCA1MTMuNSA0MDAuMTQ0IDUxMy41IDM5Ni44MTJDNTEzLjUgMzkzLjQ4MSA1MTQuODI0IDM5MC4yODUgNTE3LjE3OSAzODcuOTI5QzUxOS41MzUgMzg1LjU3NCA1MjIuNzMxIDM4NC4yNSA1MjYuMDYyIDM4NC4yNUM1MjkuMzk0IDM4NC4yNSA1MzIuNTkgMzg1LjU3NCA1MzQuOTQ2IDM4Ny45MjlDNTM3LjMwMSAzOTAuMjg1IDUzOC42MjUgMzkzLjQ4MSA1MzguNjI1IDM5Ni44MTJDNTM4LjYyNSA0MDAuMTQ0IDUzNy4zMDEgNDAzLjM0IDUzNC45NDYgNDA1LjY5NkM1MzIuNTkgNDA4LjA1MSA1MjkuMzk0IDQwOS4zNzUgNTI2LjA2MiA0MDkuMzc1WiIgZmlsbD0iI0YyRjJGMiIvPgo8cGF0aCBkPSJNNTcyLjEyNSAzNTAuNzVINDU0Ljg3NUM0NDguMjE4IDM1MC43NyA0NDEuODM4IDM1My40MjMgNDM3LjEzMSAzNTguMTMxQzQzMi40MjMgMzYyLjgzOCA0MjkuNzcgMzY5LjIxOCA0MjkuNzUgMzc1Ljg3NVY0NTAuMDc3TDQ2Mi4yNDUgNDE3LjU4MkM0NjcuMDMzIDQxMy4wMjUgNDczLjM5IDQxMC40ODQgNDgwIDQxMC40ODRDNDg2LjYxIDQxMC40ODQgNDkyLjk2NyA0MTMuMDI1IDQ5Ny43NTUgNDE3LjU4Mkw1MjEuOCA0NDEuNzYxTDUyOS4yMzcgNDM0LjMyNEM1MzMuOTU3IDQyOS42MyA1NDAuMzQzIDQyNi45OTUgNTQ3IDQyNi45OTVDNTUzLjY1NyA0MjYuOTk1IDU2MC4wNDMgNDI5LjYzIDU2NC43NjMgNDM0LjMyNEw1OTcuMjUgNDY2LjgyN1YzNzUuODc1QzU5Ny4yMyAzNjkuMjE4IDU5NC41NzcgMzYyLjgzOCA1ODkuODY5IDM1OC4xMzFDNTg1LjE2MiAzNTMuNDIzIDU3OC43ODIgMzUwLjc3IDU3Mi4xMjUgMzUwLjc1Wk01MjYuMDYyIDQwOS4zNzVDNTIyLjczMSA0MDkuMzc1IDUxOS41MzUgNDA4LjA1MSA1MTcuMTc5IDQwNS42OTZDNTE0LjgyNCA0MDMuMzQgNTEzLjUgNDAwLjE0NCA1MTMuNSAzOTYuODEyQzUxMy41IDM5My40ODEgNTE0LjgyNCAzOTAuMjg1IDUxNy4xNzkgMzg3LjkyOUM1MTkuNTM1IDM4NS41NzQgNTIyLjczMSAzODQuMjUgNTI2LjA2MiAzODQuMjVDNTI5LjM5NCAzODQuMjUgNTMyLjU5IDM4NS41NzQgNTM0Ljk0NiAzODcuOTI5QzUzNy4zMDEgMzkwLjI4NSA1MzguNjI1IDM5My40ODEgNTM4LjYyNSAzOTYuODEyQzUzOC42MjUgNDAwLjE0NCA1MzcuMzAxIDQwMy4zNCA1MzQuOTQ2IDQwNS42OTZDNTMyLjU5IDQwOC4wNTEgNTI5LjM5NCA0MDkuMzc1IDUyNi4wNjIgNDA5LjM3NVoiIGZpbGw9IiNENEQ0RDQiLz4KPHBhdGggZD0iTTQ5Ny43NTUgNDE3LjU4MkM0OTIuOTY3IDQxMy4wMjUgNDg2LjYxIDQxMC40ODQgNDgwIDQxMC40ODRDNDczLjM5IDQxMC40ODQgNDY3LjAzMyA0MTMuMDI1IDQ2Mi4yNDUgNDE3LjU4Mkw0MjkuNzUgNDUwLjA3N1Y0OTMuMTI1QzQyOS43NyA0OTkuNzgyIDQzMi40MjMgNTA2LjE2MiA0MzcuMTMxIDUxMC44NjlDNDQxLjgzOCA1MTUuNTc3IDQ0OC4yMTggNTE4LjIzIDQ1NC44NzUgNTE4LjI1SDU3Mi4xMjVDNTc4Ljk1MSA1MTguMjUgNTg1LjQ4MyA1MTUuNDYxIDU5MC4yMTUgNTEwLjU0NUw0OTcuNzU1IDQxNy41ODJaIiBmaWxsPSIjQkFCQUJBIi8+CjxwYXRoIGQ9Ik01OTcuMjUgNDY2LjgxMUw1NjQuNzY0IDQzNC4zMjRDNTYwLjA0MyA0MjkuNjMgNTUzLjY1NyA0MjYuOTk2IDU0NyA0MjYuOTk2QzU0MC4zNDMgNDI2Ljk5NiA1MzMuOTU3IDQyOS42MyA1MjkuMjM3IDQzNC4zMjRMNTIxLjggNDQxLjc2MUw1OTAuMTgyIDUxMC41MTJDNTk0LjcyMSA1MDUuODY0IDU5Ny4yNTkgNDk5LjYyNCA1OTcuMjUgNDkzLjEyNVY0NjYuODExWiIgZmlsbD0iI0YyRjJGMiIvPgo8L3N2Zz4K";

interface ProjectCardProps {
  src: string;
  url: string;
  title: string;
  text: string;
}

export const ProjectCard = ({ src, url, title, text }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <Space direction="vertical" size={16}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          placeholder
          fallback={FALLBACK_IMAGE}
          loading="lazy"
          alt={title}
          preview={{
            visible: false,
            maskClassName: "preview-mask",
            mask: (
              <Space size={0} align="start">
                <Typography.Text
                  style={{
                    color: "#fffcfa",
                    fontWeight: 500,
                    letterSpacing: "0.01rem",
                  }}
                >
                  {t("certificates.open")}
                </Typography.Text>
                <ArrowOutwardRounded
                  style={{ fontSize: "18px", marginTop: "2px" }}
                />
              </Space>
            ),
          }}
          style={{
            color: "var(--secondary-color)",
            border: "1px solid var(--secondary-color)",
            borderRadius: "26px",
            transition: "border-color 0.4s var(--bezier-animation)",
          }}
        />
      </a>
      <Space direction="vertical" size={0}>
        <Typography.Title
          level={5}
          style={{
            margin: 0,
          }}
        >
          {title}
        </Typography.Title>
        <Typography.Text
          style={{
            opacity: "var(--light-opacity)",
          }}
        >
          {text}
        </Typography.Text>
      </Space>
    </Space>
  );
};
