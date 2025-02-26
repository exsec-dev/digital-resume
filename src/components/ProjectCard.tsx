import React from "react";
import { Typography, Image, Space } from "antd";
import { ArrowOutwardRounded } from "@mui/icons-material";

export const ProjectCard = ({
  src,
  url,
  title,
  text,
}: {
  src: string;
  url: string;
  title: string;
  text: string;
}) => {
  return (
    <Space direction="vertical" size={16}>
      <Image
        src={src}
        preview={{
          onVisibleChange: () =>
            window.open(url, "_blank", "noopener,noreferrer"),
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
                View Source
              </Typography.Text>
              <ArrowOutwardRounded
                style={{ fontSize: "18px", marginTop: "2px" }}
              />
            </Space>
          ),
        }}
        style={{
          border: "1px solid var(--secondary-color)",
          borderRadius: "26px",
        }}
      />
      <Space direction="vertical" size={0}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Text style={{ opacity: "var(--light-opacity)" }}>
          {text}
        </Typography.Text>
      </Space>
    </Space>
  );
};
