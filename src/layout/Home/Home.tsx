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
        <Typography.Title>
          D<span>I</span>
          <span>G</span>
          <span>I</span>TAL
          <br />
          RESUME
        </Typography.Title>
        <Button
          color="default"
          variant="filled"
          shape="round"
          iconPosition="end"
          icon={<ArrowDownwardRounded />}
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
          <Typography.Title level={5}>{t("home.contact")}</Typography.Title>
          <Typography.Text>
            {t("home.name")}
            <br />
            <Typography.Link href="mailto:exsec.b@gmail.com">
              exsec.b@gmail.com
            </Typography.Link>
          </Typography.Text>
        </Space>
        <Typography.Text style={{ minWidth: "300px", maxWidth: "600px" }}>
          {t("home.description")}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
