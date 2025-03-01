import React from "react";
import { Typography, Space, Divider, Flex, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

export const TimePeriodPanel = ({
  title,
  subtitle,
  period,
  isSmall,
  info,
}: {
  title: string;
  subtitle: string;
  period: string;
  isSmall?: boolean;
  info?: {
    title: string;
    text: string[];
  };
}) => {
  return (
    <Space
      direction="vertical"
      size={isSmall ? 6 : 8}
      style={{ width: "100%" }}
    >
      <Space
        direction="vertical"
        size={isSmall ? 0 : 4}
        style={{ width: "100%" }}
      >
        <Flex justify="space-between" align="start" gap={6}>
          <Typography.Text
            style={{
              fontWeight: 500,
              fontSize: isSmall ? 15 : 16,
              lineHeight: "24px",
            }}
          >
            {title}
          </Typography.Text>
          {info ? (
            <Popover
              placement="leftTop"
              content={
                <Space
                  className="popover-container"
                  direction="vertical"
                  size={2}
                >
                  <Typography.Title
                    style={{
                      fontWeight: 475,
                      fontSize: "14px",
                      letterSpacing: "0.02rem",
                    }}
                  >
                    {info.title}
                  </Typography.Title>
                  <Space direction="vertical" size={0}>
                    {info.text.map((item, i) => (
                      <Typography.Text
                        key={i}
                        style={{
                          fontSize: "12px",
                          letterSpacing: "0.02rem",
                          opacity: 0.7,
                          display: "inline-block",
                        }}
                      >
                        {item}
                      </Typography.Text>
                    ))}
                  </Space>
                </Space>
              }
              trigger="hover"
            >
              <InfoCircleOutlined
                className="popover-icon"
                style={{ opacity: "0.4", paddingTop: "5px" }}
              />
            </Popover>
          ) : null}
        </Flex>
        <Typography.Text
          style={{ letterSpacing: "0.02rem", lineHeight: "20px" }}
        >
          {subtitle}
        </Typography.Text>
      </Space>
      <Divider
        style={{
          margin: 0,
          opacity: 0.2,
          borderBlockStart: "1.5px solid var(--primary-color)",
        }}
      />
      <Typography.Text
        italic
        style={{
          opacity: "var(--light-opacity)",
          fontSize: isSmall ? 13 : 14,
        }}
      >
        {period}
      </Typography.Text>
    </Space>
  );
};
