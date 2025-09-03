import React from "react";
import {
  Typography,
  Flex,
  Button,
  Space,
  Tag,
  theme,
  Popover,
  Image,
} from "antd";
import { useTranslation } from "react-i18next";
import {
  ArrowDownwardRounded,
  BadgeOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import Avatar from "../../assets/images/avatar.webp";
import "./index.scss";

const { useToken } = theme;
const CURRENT_STATUS: number = 2;

export const Home = () => {
  const { token } = useToken();
  const { t } = useTranslation();

  const statusMap = [
    ["home.status.available", token.colorSuccess],
    ["home.status.open", token.colorWarning],
    ["home.status.employed", token.colorError],
  ];

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
          style={{
            textTransform: "uppercase",
            transition:
              "border-color 0.4s var(--bezier-animation), color 0.4s var(--bezier-animation), background-color 0.2s var(--bezier-animation)",
          }}
        >
          {t("home.scroll")}
        </Button>
      </Flex>
      <Flex className="description" justify="space-between" align="start">
        <Space direction="vertical" size={0} style={{ whiteSpace: "nowrap" }}>
          <Typography.Title level={5}>{t("home.contact")}</Typography.Title>
          <Typography.Text>
            <Space size={4}>
              {t("home.name")}
              <Popover
                placement="rightTop"
                trigger="hover"
                destroyTooltipOnHide
                classNames={{
                  body: "image-popover",
                }}
                content={
                  <Space
                    className="avatar-container"
                    direction="vertical"
                    size={2}
                  >
                    <Image src={Avatar} preview={false} placeholder />
                    <Space
                      size={2}
                      style={{ width: "100%", justifyContent: "flex-end" }}
                    >
                      <Typography.Text>{t("home.place")}</Typography.Text>
                      <LocationOnOutlined />
                    </Space>
                  </Space>
                }
              >
                <Button type="text" style={{ padding: "2px", height: 25 }}>
                  <BadgeOutlined
                    style={{
                      fontSize: "21px",
                      opacity: "var(--light-opacity)",
                      fill: "var(--primary-color)",
                    }}
                  />
                </Button>
              </Popover>
            </Space>
            <br />
            <Typography.Link
              href="mailto:exsec.b@gmail.com"
              style={{ transition: "color 0.4s var(--bezier-animation)" }}
            >
              exsec.b@gmail.com
            </Typography.Link>
          </Typography.Text>
        </Space>
        <Space
          direction="vertical"
          size={4}
          style={{ minWidth: "300px", maxWidth: "600px" }}
        >
          <Space size={10}>
            <Typography.Title level={5}>{t("home.status")}</Typography.Title>
            <Tag
              style={{
                padding: "0 10px",
                background: statusMap[CURRENT_STATUS][1] + "15",
                color: statusMap[CURRENT_STATUS][1],
                borderColor: statusMap[CURRENT_STATUS][1],
                opacity: CURRENT_STATUS !== 1 ? 0.9 : 1,
              }}
            >
              {t(statusMap[CURRENT_STATUS][0])}
            </Tag>
          </Space>
          <Typography.Text>{t("home.description")}</Typography.Text>
        </Space>
      </Flex>
    </Flex>
  );
};
