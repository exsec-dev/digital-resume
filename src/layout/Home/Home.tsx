import type { CSSProperties } from "react";
import { Typography, Flex, Button, Space, Tag, theme, Popover } from "antd";
import images from "assets/images";
import {
  ArrowDownwardRounded,
  BadgeOutlined,
  LocationOnOutlined,
} from "components/icons";
import { useTranslation } from "react-i18next";
import "./index.scss";

const { useToken } = theme;

type AvailabilityStatus = "available" | "open" | "employed";

const CURRENT_STATUS: AvailabilityStatus = "employed";
const SCROLL_DURATION_MS = 900;
let scrollAnimationFrameId: number | undefined;

const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - (-2 * value + 2) ** 3 / 2;

const scrollToElement = (element: HTMLElement) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) {
    element.scrollIntoView();
    return;
  }

  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  const startedAt = performance.now();

  if (scrollAnimationFrameId) {
    cancelAnimationFrame(scrollAnimationFrameId);
  }

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startedAt) / SCROLL_DURATION_MS, 1);

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      scrollAnimationFrameId = requestAnimationFrame(step);
    } else {
      scrollAnimationFrameId = undefined;
    }
  };

  scrollAnimationFrameId = requestAnimationFrame(step);
};

export const Home = () => {
  const { token } = useToken();
  const { t } = useTranslation();

  const statusConfig: Record<
    AvailabilityStatus,
    { labelKey: string; color: string; opacity: number }
  > = {
    available: {
      labelKey: "home.status.available",
      color: token.colorSuccess,
      opacity: 0.9,
    },
    open: {
      labelKey: "home.status.open",
      color: token.colorWarning,
      opacity: 1,
    },
    employed: {
      labelKey: "home.status.employed",
      color: token.colorError,
      opacity: 0.9,
    },
  };
  const { labelKey, color, opacity } = statusConfig[CURRENT_STATUS];

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
          className="scroll-button"
          color="default"
          variant="filled"
          shape="round"
          iconPosition="end"
          icon={<ArrowDownwardRounded />}
          onClick={() => {
            const element = document.getElementById("contact");
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
          <Typography.Title level={5}>{t("home.contact")}</Typography.Title>
          <Typography.Text>
            <Space size={4}>
              {t("home.name")}
              <Popover
                placement="rightTop"
                trigger="hover"
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
            <Typography.Link
              className="home-email"
              href="mailto:exsec.b@gmail.com"
            >
              exsec.b@gmail.com
            </Typography.Link>
          </Typography.Text>
        </Space>
        <Space className="status-column" direction="vertical" size={4}>
          <Space className="status-row" size={10}>
            <Typography.Title level={5}>{t("home.status")}:</Typography.Title>
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
