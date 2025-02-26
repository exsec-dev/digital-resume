import React from "react";
import { Layout, Flex, Space, Typography, Button } from "antd";
import { ArrowOutwardRounded, Telegram } from "@mui/icons-material";

export const Contacts = () => {
  return (
    <Layout.Footer style={{ padding: 0 }} id="contact">
      <Flex
        vertical
        align="center"
        style={{ padding: "48px 0px 24px" }}
        gap={64}
      >
        <Space direction="vertical" align="center" size={0}>
          <Typography.Title
            level={1}
            style={{ fontWeight: 650, fontSize: "52px" }}
          >
            Contact Me!
          </Typography.Title>
          <Space data-nosnippet>
            <Button
              type="primary"
              icon={
                <ArrowOutwardRounded
                  style={{ fontSize: "16px", color: "var(--bg-color)" }}
                />
              }
              iconPosition="end"
              style={{
                padding: "24px 30px",
                borderRadius: "48px",
                backgroundColor: "var(--primary-color)",
              }}
            >
              <Typography.Link
                href="mailto:exsec.b@gmail.com"
                target="_blank"
                style={{
                  color: "var(--bg-color)",
                  fontWeight: "400",
                  letterSpacing: "0.02rem",
                  fontSize: "13.5px",
                }}
              >
                exsec.b@gmail.com
              </Typography.Link>
            </Button>
            <Button
              type="primary"
              href="https://t.me/exsec2"
              target="_blank"
              icon={
                <Telegram
                  style={{
                    fontSize: "20px",
                    color: "var(--bg-color)",
                    position: "relative",
                    top: "1px",
                    right: "1px",
                  }}
                />
              }
              style={{
                padding: "24px",
                borderRadius: "48px",
                backgroundColor: "var(--primary-color)",
              }}
            />
          </Space>
        </Space>
        <Flex
          justify="space-between"
          align="end"
          style={{ width: "100%", letterSpacing: "0.01rem" }}
          data-nosnippet
        >
          <Typography.Text style={{ fontSize: "12px" }}>
            Last Updated: 25.02.2025
          </Typography.Text>
          <Typography.Text style={{ fontSize: "12px" }}>
            2025 © — Made by Exsec
          </Typography.Text>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
};
