import { Layout, Flex, Space, Typography, Button } from "antd";
import { useTranslation } from "react-i18next";
import { ArrowOutwardRounded, Telegram, GitHub } from "components/icons";
import { EMAIL, TELEGRAM_URL, GITHUB_URL } from "config/contacts";
import { SECTION_ID } from "config/sections";
import "./index.scss";

export const Contacts = () => {
  const { t } = useTranslation();
  const buildDate = import.meta.env.VITE_BUILD_DATE;

  return (
    <Layout.Footer id={SECTION_ID.contact} className="footer">
      <Flex
        className="footer-content"
        vertical
        align="center"
        gap={64}
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
              className="contact-link mail-link"
              type="primary"
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowOutwardRounded />}
              iconPosition="end"
            >
              {EMAIL}
            </Button>
            <Button
              className="contact-link telegram-link"
              type="primary"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              icon={<Telegram />}
            />
            <Button
              className="contact-link"
              type="primary"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<GitHub />}
            />
          </Space>
        </Space>
        <Flex className="copyright" justify="space-between" align="end">
          <Typography.Text>
            {`${t("contacts.updated")}: ${buildDate}`}
          </Typography.Text>
          <Typography.Text>{t("contacts.author")} Exsec ©</Typography.Text>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
};
