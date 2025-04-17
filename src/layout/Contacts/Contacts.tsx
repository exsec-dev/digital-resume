import React from "react";
import { Layout, Flex, Space, Typography, Button } from "antd";
import { useTranslation } from "react-i18next";
import { ArrowOutwardRounded, Telegram, GitHub } from "@mui/icons-material";
import "./index.scss";

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <Layout.Footer id="contact">
      <Flex
        vertical
        align="center"
        gap={64}
        style={{ padding: "48px 0px 24px" }}
      >
        <Space
          className="contacts"
          direction="vertical"
          align="center"
          size={0}
        >
          <Typography.Title level={2}>{t("contacts.title")}</Typography.Title>
          <Space>
            <Button
              className="mail-link"
              type="primary"
              href="mailto:exsec.b@gmail.com"
              target="_blank"
              icon={<ArrowOutwardRounded />}
              iconPosition="end"
            >
              exsec.b@gmail.com
            </Button>
            <Button
              type="primary"
              href="https://t.me/exsec2"
              target="_blank"
              icon={<Telegram style={{ top: "1px", right: "1px" }} />}
            />
            <Button
              type="primary"
              href="https://github.com/exsec-dev"
              target="_blank"
              icon={<GitHub />}
            />
          </Space>
        </Space>
        <Flex className="copyright" justify="space-between" align="end">
          <Typography.Text>
            {`${t("contacts.updated")}: ${process.env.REACT_APP_BUILD_DATE}`}
          </Typography.Text>
          <Typography.Text>{t("contacts.author")} Exsec ©</Typography.Text>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
};
