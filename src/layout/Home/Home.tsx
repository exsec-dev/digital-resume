import { Typography, Flex, Button, Space, Popover } from "antd";
import { useTranslation } from "react-i18next";
import images from "assets/images";
import { KineticTitle } from "components";
import { ArrowDownwardRounded, BadgeOutlined } from "components/icons";
import { EMAIL } from "config/contacts";
import { SECTION_ID } from "config/sections";
import { scrollToElement } from "utils/scrollToElement";
import "./index.scss";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Flex id={SECTION_ID.home} tabIndex={-1} vertical gap={48}>
      <Flex className="title-container" justify="space-between">
        <KineticTitle text={"DIGITAL\nRESUME"} />
        <Button
          className="scroll-button"
          color="default"
          variant="filled"
          shape="round"
          iconPosition="end"
          icon={<ArrowDownwardRounded />}
          onClick={() => {
            const element = document.getElementById(SECTION_ID.contact);
            if (element) {
              scrollToElement(element);
            }
          }}
        >
          {t("home.scroll")}
        </Button>
      </Flex>
      <Flex className="description" justify="space-between" align="start">
        <Space className="home-contact" direction="vertical" size={0}>
          <Typography.Text strong className="home-label">
            {t("home.contact")}
          </Typography.Text>
          <Typography.Text>
            <Space size={4}>
              {t("home.name")}
              <Popover
                placement="rightTop"
                trigger={["hover", "focus"]}
                destroyOnHidden
                classNames={{
                  body: "image-popover",
                }}
                styles={{
                  body: { padding: 8 },
                }}
                content={
                  <div className="avatar-container">
                    <img
                      src={images.avatar}
                      loading="lazy"
                      alt={t("home.name")}
                      width={467}
                      height={572}
                    />
                  </div>
                }
              >
                <Button
                  className="contact-badge-button"
                  type="text"
                  aria-label={t("home.name")}
                >
                  <BadgeOutlined className="contact-badge-icon" />
                </Button>
              </Popover>
            </Space>
          </Typography.Text>
          <Typography.Link className="home-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </Typography.Link>
        </Space>
        <Space className="about-column" direction="vertical" size={4}>
          <Typography.Text strong className="home-label">
            {t("home.about")}
          </Typography.Text>
          <Typography.Text>{t("home.description")}</Typography.Text>
        </Space>
      </Flex>
    </Flex>
  );
};
