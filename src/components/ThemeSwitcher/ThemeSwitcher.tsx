import { useTranslation } from "react-i18next";
import { DarkModeRounded } from "components/icons";
import { Tooltip } from "components/Tooltip";
import { useScheme } from "providers/ThemeContext";

export const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { scheme, setScheme } = useScheme();
  const isDark = scheme === "dark";
  const ariaLabel = isDark ? t("a11y.theme.light") : t("a11y.theme.dark");

  return (
    <Tooltip
      content={t("header.tooltip.theme")}
      placement="bottom"
      variant="tooltip"
    >
      <button
        type="button"
        className="button button--circle header-icon-button"
        aria-label={ariaLabel}
        aria-pressed={isDark}
        onClick={() => setScheme(isDark ? "light" : "dark")}
      >
        <DarkModeRounded />
      </button>
    </Tooltip>
  );
};
