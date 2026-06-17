import { Button, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { DarkModeRounded } from "components/icons";
import { useScheme } from "hooks/useScheme";

export const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { scheme, setScheme } = useScheme();
  const isDark = scheme === "dark";
  const ariaLabel = isDark ? t("a11y.theme.light") : t("a11y.theme.dark");

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
        aria-label={ariaLabel}
        aria-pressed={isDark}
        onClick={() => setScheme(isDark ? "light" : "dark")}
      >
        <DarkModeRounded />
      </Button>
    </Tooltip>
  );
};
