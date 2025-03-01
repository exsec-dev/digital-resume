import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Anchor, Flex, Space, Tooltip, Button, Typography } from "antd";
import { Logo } from "components";
import {
  DownloadRounded,
  ContrastRounded,
  MenuRounded,
  MenuOpenRounded,
} from "@mui/icons-material";
import "./index.scss";

const variables = {
  "--primary-color": ["#f8f6f0", "#181614"],
  "--bg-color": ["#181614", "#f8f6f0"],
  "--icon-color": ["#262626", "#ffffff"],
  "--text-weight": ["450", "350"],
  "--secondary-color": ["#2a2a2a", "#e1e1e1"],
  "--pop-color": ["#1c1b19", "#f9f7f3"],
  "--light-grey": ["#4e4e4e", "#dbdbdb"],
};

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [scheme, setScheme] = useState<string>(
    localStorage.getItem("scheme") || "light",
  );
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

  useEffect(() => {
    Object.entries(variables).forEach(([variable, values]) => {
      document.documentElement.style.setProperty(
        variable,
        values[scheme === "dark" ? 0 : 1],
      );
    });
    localStorage.setItem("scheme", scheme);
  }, [scheme]);

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
        <Space
          className="fixed-panel"
          direction="vertical"
          style={{
            lineHeight: layout === "vertical" ? 0 : "unset",
            top: layout === "vertical" ? "22px" : undefined,
          }}
          size={6}
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
                  <MenuOpenRounded
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
          <Space className="button-container" size={6} direction={layout}>
            {layout === "horizontal" ? (
              <Anchor
                className="navigation"
                items={parts}
                bounds={240}
                direction="horizontal"
                key={`${i18n.language}${scheme}`}
              />
            ) : null}
            <Space
              className="features"
              ref={menuRef}
              size={6}
              direction={layout}
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
                  icon={
                    <DownloadRounded
                      style={{
                        fontSize: layout === "vertical" ? "22px" : "20px",
                      }}
                    />
                  }
                  onClick={downloadFile}
                  style={{ padding: layout === "vertical" ? "20px" : "unset" }}
                />
              </Tooltip>
              <Tooltip
                title={t("header.tooltip.theme")}
                placement={layout === "vertical" ? "left" : "bottom"}
              >
                <Button
                  type="primary"
                  shape="circle"
                  icon={
                    <ContrastRounded
                      style={{
                        fontSize: layout === "vertical" ? "22px" : "20px",
                      }}
                    />
                  }
                  onClick={() =>
                    setScheme(scheme === "light" ? "dark" : "light")
                  }
                  style={{ padding: layout === "vertical" ? "20px" : "unset" }}
                />
              </Tooltip>
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
                    bottom: layout === "vertical" ? "0" : "2px",
                  }}
                  onClick={() => changeLanguage()}
                >
                  <Typography.Text
                    style={{ fontWeight: 350, color: "var(--icon-color)" }}
                  >
                    {i18n.language === "ru" ? "EN" : "RU"}
                  </Typography.Text>
                </Button>
              </Tooltip>
            </Space>
          </Space>
        </Space>
      </Flex>
    </Layout.Header>
  );
};
