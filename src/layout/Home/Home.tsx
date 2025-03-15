import React from "react";
import { Typography, Flex, Button, Space } from "antd";
import { useTranslation } from "react-i18next";
import { ArrowDownwardRounded } from "@mui/icons-material";
import "./index.scss";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Flex id="home" vertical gap={48}>
      <Flex className="title-container" justify="space-between">
        <Typography.Title
          className="title"
          style={{
            letterSpacing: "-0.02rem",
            lineHeight: "100%",
            fontWeight: "700",
            marginBottom: "0",
            whiteSpace: "nowrap",
          }}
        >
          Digital
          <br />
          Résumé
        </Typography.Title>
        <Button
          className="secondary"
          color="default"
          variant="filled"
          shape="round"
          iconPosition="end"
          icon={<ArrowDownwardRounded style={{ fontSize: "1rem" }} />}
          style={{ height: "48px", padding: "16px 20px" }}
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {t("home.scroll")}
        </Button>
      </Flex>
      <Flex className="description" justify="space-between" align="start">
        <Space direction="vertical" size={4} style={{ whiteSpace: "nowrap" }}>
          <Typography.Title level={5} style={{ margin: 0 }}>
            {t("home.contact")}
          </Typography.Title>
          <Typography.Text>
            {t("home.name")}
            <br />
            <a
              href="mailto:exsec.b@gmail.com"
              style={{
                letterSpacing: "0.02rem",
                color: "var(--primary-color)",
                opacity: "var(--light-opacity)",
              }}
            >
              exsec.b@gmail.com
            </a>
          </Typography.Text>
        </Space>
        <Typography.Text style={{ minWidth: "300px", maxWidth: "600px" }}>
          {t("home.description")}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
