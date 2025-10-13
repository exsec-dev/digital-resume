import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Anchor, Flex, Tooltip, Button } from "antd";
import { Logo, ThemeSwitcher } from "components";
import { DownloadRounded, PublicRounded } from "@mui/icons-material";
import "./index.scss";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/assets/files/CV.pdf";
    link.download = "Prozhirko_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const changeLanguage = () => {
    if (i18n.language === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };

  const items = useMemo(
    () => [
      {
        key: "home",
        href: "#home",
        title: t("header.menu.home"),
      },
      {
        key: "projects",
        href: "#projects",
        title: t("header.menu.projects"),
      },
      {
        key: "about",
        href: "#about",
        title: t("header.menu.about"),
      },
    ],
    [t],
  );

  return (
    <Layout.Header className="header">
      <Flex justify="space-between" align="center" style={{ height: "100%" }}>
        <Logo />
        <Flex gap={18}>
          <Anchor
            className="navigation"
            items={items}
            bounds={240}
            targetOffset={100}
            direction="horizontal"
          />
          <Flex className="button-container">
            <ThemeSwitcher />
            <Tooltip
              title={t("header.tooltip.lang")}
              placement="bottom"
              destroyTooltipOnHide
            >
              <Button type="primary" shape="circle" onClick={changeLanguage}>
                <PublicRounded />
              </Button>
            </Tooltip>
            <Button
              className="download"
              type="primary"
              onClick={downloadFile}
              iconPosition="end"
              icon={<DownloadRounded />}
            >
              {t("header.tooltip.pdf")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};
