import { Button, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { DarkModeRounded } from "components/icons";
import { useScheme } from "hooks/useScheme";

export const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { scheme, setScheme } = useScheme();

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
        onClick={() => setScheme(scheme === "light" ? "dark" : "light")}
      >
        <DarkModeRounded />
      </Button>
    </Tooltip>
  );
};
