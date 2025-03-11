import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { MainContext } from "MainContext";
import { Layout, Anchor, Flex, Tooltip, Button } from "antd";
import { Logo, ThemeSwitcher } from "components";
import {
  DownloadRounded,
  MenuRounded,
  CloseRounded,
  PublicRounded,
} from "@mui/icons-material";
import "./index.scss";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { scheme } = useContext(MainContext);

  const [collapsed, setCollapsed] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [layout, setLayout] = useState<"vertical" | "horizontal">(
    window.matchMedia("(min-width: 768px)").matches ? "horizontal" : "vertical",
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleScreenChange = (event: MediaQueryListEvent) => {
      setLayout(event.matches ? "horizontal" : "vertical");
    };

    document.addEventListener("mousedown", handleClickOutside);
    mediaQuery.addEventListener("change", handleScreenChange);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

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

  const parts = [
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
  ];

  return (
    <Layout.Header className="header">
      <Flex
        vertical={layout === "horizontal"}
        align={layout === "vertical" ? "start" : "center"}
        justify="space-between"
        gap={8}
      >
        <Logo />
        <Flex
          className="fixed-panel"
          vertical
          style={{
            lineHeight: layout === "vertical" ? 0 : "unset",
            top: layout === "vertical" ? "22px" : undefined,
          }}
          gap={6}
        >
          {layout === "vertical" ? (
            <Button
              ref={buttonRef}
              type="primary"
              shape="circle"
              icon={
                collapsed ? (
                  <MenuRounded
                    style={{
                      fontSize: layout === "vertical" ? "22px" : "20px",
                    }}
                  />
                ) : (
                  <CloseRounded
                    style={{
                      fontSize: layout === "vertical" ? "22px" : "20px",
                    }}
                  />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{ padding: layout === "vertical" ? "20px" : "unset" }}
            />
          ) : null}
          <Flex
            className="button-container"
            gap={6}
            vertical={layout === "vertical"}
          >
            {layout === "horizontal" ? (
              <Anchor
                className="navigation"
                items={parts}
                bounds={240}
                direction="horizontal"
                key={`${i18n.language}${scheme}`}
              />
            ) : null}
            <Flex
              className="features"
              ref={menuRef}
              gap={6}
              vertical={layout === "vertical"}
              style={{
                lineHeight: layout === "vertical" ? 0 : "unset",
                bottom: collapsed && layout === "vertical" ? "200px" : 0,
              }}
            >
              <Tooltip
                title={t("header.tooltip.pdf")}
                placement={layout === "vertical" ? "left" : "bottom"}
              >
                <Button
                  type="primary"
                  shape="circle"
                  onClick={downloadFile}
                  style={{ padding: layout === "vertical" ? "20px" : "unset" }}
                >
                  <DownloadRounded
                    style={{
                      fontSize: layout === "vertical" ? "22px" : "20px",
                    }}
                  />
                </Button>
              </Tooltip>
              <ThemeSwitcher layout={layout} />
              <Tooltip
                title={t("header.tooltip.lang")}
                placement={layout === "vertical" ? "left" : "bottom"}
              >
                <Button
                  type="primary"
                  shape="circle"
                  style={{
                    fontWeight: 300,
                    padding: layout === "vertical" ? "20px" : "unset",
                    position: "relative",
                  }}
                  onClick={() => changeLanguage()}
                >
                  <PublicRounded
                    style={{
                      fontSize: layout === "vertical" ? "22px" : "20px",
                    }}
                  />
                </Button>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};
