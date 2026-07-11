import { useTranslation } from "react-i18next";
import { CollapsePanel } from "components";
import { OpenInNewRounded, Add } from "components/icons";
import { CERTIFICATES_PATH } from "config/contacts";
import { getTranslationList } from "utils/i18n";
import "./index.scss";

export const Certificates = () => {
  const { t } = useTranslation();
  return (
    <CollapsePanel
      title={t("certificates")}
      headerAction={
        <a
          className="icon-link"
          title={t("certificates.open")}
          aria-label={t("certificates.open")}
          href={CERTIFICATES_PATH}
          target="_blank"
          rel="noopener noreferrer"
        >
          <OpenInNewRounded />
        </a>
      }
      content={
        <ul className="certificates-list">
          {getTranslationList(t, "certificates.list").map((item, i) => (
            <li key={i} className="list-item">
              <Add />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      }
      defaultClosed
    />
  );
};
