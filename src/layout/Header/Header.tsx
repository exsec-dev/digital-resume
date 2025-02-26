import React, { useState, useEffect, useRef } from "react";
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

const parts = [
  {
    key: "home",
    href: "#home",
    title: "Home",
  },
  {
    key: "projects",
    href: "#projects",
    title: "Projects",
  },
  {
    key: "about",
    href: "#about",
    title: "About",
  },
];

export const Header = () => {
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
          style={{ lineHeight: layout === "vertical" ? 0 : "unset" }}
        >
          {layout === "vertical" ? (
            <Button
              ref={buttonRef}
              type="primary"
              shape="circle"
              icon={
                collapsed ? (
                  <MenuRounded style={{ fill: "var(--icon-color)" }} />
                ) : (
                  <MenuOpenRounded style={{ fill: "var(--icon-color)" }} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : null}
          <Space
            size={6}
            direction={layout}
            style={{ overflow: "hidden", borderRadius: "80px" }}
          >
            {layout === "horizontal" ? (
              <Anchor
                className="navigation"
                items={parts}
                bounds={240}
                direction="horizontal"
              />
            ) : null}
            <Space
              ref={menuRef}
              size={6}
              direction={layout}
              style={{
                lineHeight: layout === "vertical" ? 0 : "unset",
                position: "relative",
                bottom: collapsed && layout === "vertical" ? "200px" : 0,
                transition: "bottom 0.3s",
                marginTop: "1px",
              }}
            >
              <Tooltip
                title="Download PDF"
                placement={layout === "vertical" ? "left" : "bottom"}
              >
                <Button
                  type="primary"
                  shape="circle"
                  icon={
                    <DownloadRounded style={{ fill: "var(--icon-color)" }} />
                  }
                  onClick={downloadFile}
                />
              </Tooltip>
              <Tooltip
                title="Change Theme"
                placement={layout === "vertical" ? "left" : "bottom"}
              >
                <Button
                  type="primary"
                  shape="circle"
                  icon={
                    <ContrastRounded style={{ fill: "var(--icon-color)" }} />
                  }
                  onClick={() =>
                    setScheme(scheme === "light" ? "dark" : "light")
                  }
                />
              </Tooltip>
              <Tooltip
                title="Translate"
                placement={layout === "vertical" ? "left" : "bottom"}
              >
                <Button
                  type="primary"
                  shape="circle"
                  style={{ fontWeight: 300, bottom: "2px" }}
                >
                  <Typography.Text
                    style={{ fontWeight: 350, color: "var(--bg-color)" }}
                  >
                    EN
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
