import type { CSSProperties } from "react";
import { useMemo } from "react";
import { Typography, Flex, Button, Space, Tag, theme, Popover } from "antd";
import { useTranslation } from "react-i18next";
import images from "assets/images";
import {
  ArrowDownwardRounded,
  BadgeOutlined,
  LocationOnOutlined,
} from "components/icons";
import { EMAIL } from "config/contacts";
import { CURRENT_STATUS, type AvailabilityStatus } from "config/profile";
import { SECTION_ID } from "config/sections";
import { scrollToElement } from "utils/scrollToElement";
import "./index.scss";

const { useToken } = theme;

type StatusLabelKey = `home.status.${AvailabilityStatus}`;

export const Home = () => {
  const { token } = useToken();
  const { t } = useTranslation();

  const { color, opacity } = useMemo(
    () => ({
      available: { color: token.colorSuccess, opacity: 0.9 },
      open: { color: token.colorWarning, opacity: 1 },
      employed: { color: token.colorError, opacity: 0.9 },
    })[CURRENT_STATUS],
    [token],
  );
  const labelKey: StatusLabelKey = `home.status.${CURRENT_STATUS}`;

  return (
    <Flex id={SECTION_ID.home} tabIndex={-1} vertical gap={48}>
      <Flex className="title-container" justify="space-between">
        <Typography.Title>
          D<span>I</span>
          <span>G</span>
          <span>I</span>TAL
          <br />
          RESUME
        </Typography.Title>
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
                content={
                  <Space
                    className="avatar-container"
                    direction="vertical"
                    size={2}
                  >
                    <img
                      src={images.avatar}
                      loading="lazy"
                      alt={t("home.name")}
                      width={467}
                      height={572}
                    />
                    <Space className="avatar-location" size={2}>
                      <Typography.Text>{t("home.place")}</Typography.Text>
                      <LocationOnOutlined />
                    </Space>
                  </Space>
                }
              >
                <Button
                  className="contact-badge-button"
                  type="text"
                  aria-label={t("home.place")}
                >
                  <BadgeOutlined className="contact-badge-icon" />
                </Button>
              </Popover>
            </Space>
            <br />
            <Typography.Link className="home-email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </Typography.Link>
          </Typography.Text>
        </Space>
        <Space className="status-column" direction="vertical" size={4}>
          <Space className="status-row" size={10}>
            <Typography.Text strong className="home-label">
              {t("home.status")}:
            </Typography.Text>
            <Tag
              className="availability-tag"
              style={{
                "--status-bg": `${color}15`,
                "--status-color": color,
                "--status-opacity": opacity,
              } as CSSProperties}
            >
              {t(labelKey)}
            </Tag>
          </Space>
          <Typography.Text>{t("home.description")}</Typography.Text>
        </Space>
      </Flex>
    </Flex>
  );
};
