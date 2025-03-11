import React, { useContext, useEffect } from "react";
import { MainContext } from "MainContext";
import { Button, Tooltip } from "antd";
import { DarkModeRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const variables = {
  "--primary-color": ["#f8f6f0", "#181614"],
  "--bg-color": ["#161515", "#f8f6f0"],
  "--icon-color": ["#262626", "#fffcfa"],
  "--text-weight": ["450", "350"],
  "--button-bg": ["#ebeae4", "#1f1c19"],
  "--secondary-color": ["#2a2a2a", "#e1e1e1"],
  "--pop-color": ["#1e1e1e", "#f6f6f4"],
  "--light-grey": ["#4e4e4e", "#dbdbdb"],
};

interface ThemeSwitcherProps {
  layout: "vertical" | "horizontal";
}

export const ThemeSwitcher = ({ layout }: ThemeSwitcherProps) => {
  const { t } = useTranslation();
  const { scheme, toggleScheme } = useContext(MainContext);

  useEffect(() => {
    Object.entries(variables).forEach(([variable, values]) => {
      document.documentElement.style.setProperty(
        variable,
        values[scheme === "dark" ? 0 : 1],
      );
    });
    localStorage.setItem("scheme", scheme);
  }, [scheme]);

  return (
    <Tooltip
      title={t("header.tooltip.theme")}
      placement={layout === "vertical" ? "left" : "bottom"}
    >
      <Button
        type="primary"
        shape="circle"
        onClick={() => toggleScheme(scheme === "light" ? "dark" : "light")}
        style={{ padding: layout === "vertical" ? "20px" : "unset" }}
      >
        <DarkModeRounded
          style={{
            fontSize: layout === "vertical" ? "22px" : "20px",
          }}
        />
      </Button>
    </Tooltip>
  );
};
