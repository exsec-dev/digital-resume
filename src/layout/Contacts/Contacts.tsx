import { useTranslation } from "react-i18next";
import { ArrowOutwardRounded, Telegram, GitHub } from "components/icons";
import { EMAIL, TELEGRAM_URL, GITHUB_URL } from "config/contacts";
import { SECTION_ID } from "config/sections";
import "./index.scss";

const [buildYear, buildMonth, buildDay] = __BUILD_DATE__.split("-");
const formattedBuildDate = `${buildDay}.${buildMonth}.${buildYear}`;

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <footer id={SECTION_ID.contact} className="footer">
      <div className="footer-content">
        <div className="contacts">
          <h2>{t("contacts.title")}</h2>
          <div className="contact-links">
            <a
              className="button button--primary contact-link mail-link"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
              <ArrowOutwardRounded />
            </a>
            <a
              className="button button--primary contact-link telegram-link"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Telegram />
            </a>
            <a
              className="button button--primary contact-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
          </div>
        </div>
        <div className="copyright">
          <span>{`${t("contacts.updated")}: ${formattedBuildDate}`}</span>
          <span>{`© ${buildYear} Exsec`}</span>
        </div>
      </div>
    </footer>
  );
};
