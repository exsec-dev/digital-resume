import React, { useContext, useEffect } from "react";
import { MainContext } from "MainContext";
import { Button, Tooltip } from "antd";
import { DarkModeRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const variables = {
  "--primary-color": ["#f8f6f0", "#181614"],
  "--bg-color": ["#121212", "#f8f6f0"],
  "--header-color": ["rgba(10, 10, 10, 0.8)", "rgb(239 237 233 / 80%)"],
  "--noise-bg": ["#161616", "#ebebeb"],
  "--mobile-header-color": ["#121212a6", "#f8f6f0a6"],
  "--icon-color": ["#fffcfa", "#262626"],
  "--text-weight": ["450", "350"],
  "--header-weight": ["400", "525"],
  "--button-bg": ["#ebeae4", "#1f1c19"],
  "--secondary-color": ["#2a2a2a", "#e1e1e1"],
  "--pop-color": ["#1b1b1b", "#f6f6f4"],
  "--light-grey": ["#4e4e4e", "#dbdbdb"],
};

export const ThemeSwitcher = () => {
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
      placement="bottom"
      destroyTooltipOnHide
    >
      <Button
        type="primary"
        shape="circle"
        onClick={() => toggleScheme(scheme === "light" ? "dark" : "light")}
      >
        <DarkModeRounded />
      </Button>
    </Tooltip>
  );
};
