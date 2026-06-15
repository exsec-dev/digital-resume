import { useContext, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { DarkModeRounded } from "components/icons";
import { MainContext } from "MainContext";
import { useTranslation } from "react-i18next";

export const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { scheme, toggleScheme } = useContext(MainContext);

  useEffect(() => {
    if (scheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("scheme", scheme);
    } catch {
      // UI should still switch even if storage is blocked
    }
  }, [scheme]);

  return (
    <Tooltip
      title={t("header.tooltip.theme")}
      placement="bottom"
      destroyOnHidden
    >
      <Button
        variant="filled"
        color="default"
        shape="circle"
        aria-label={t("header.tooltip.theme")}
        onClick={() => toggleScheme(scheme === "light" ? "dark" : "light")}
      >
        <DarkModeRounded />
      </Button>
    </Tooltip>
  );
};
