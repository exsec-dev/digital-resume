import { useTranslation } from "react-i18next";
import "./index.scss";

interface ErrorFallbackProps {
  onReload: () => void;
}

export const ErrorFallback = ({ onReload }: ErrorFallbackProps) => {
  const { t } = useTranslation();

  return (
    <main className="error-fallback">
      <h3 className="error-fallback-title">{t("error.title")}</h3>
      <p className="error-fallback-description">{t("error.description")}</p>
      <button
        type="button"
        className="button button--primary"
        onClick={onReload}
      >
        {t("error.reload")}
      </button>
    </main>
  );
};
