import { useTranslation } from "react-i18next";
import images from "assets/images";
import { KineticTitle, Tooltip } from "components";
import { ArrowDownwardRounded, BadgeOutlined } from "components/icons";
import { EMAIL } from "config/contacts";
import { SECTION_ID } from "config/sections";
import { scrollToElement } from "utils/scrollToElement";
import "./index.scss";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id={SECTION_ID.home} tabIndex={-1} className="home">
      <div className="title-container">
        <KineticTitle text={"DIGITAL\nRESUME"} />
        <button
          type="button"
          className="button scroll-button"
          onClick={() => {
            const element = document.getElementById(SECTION_ID.contact);
            if (element) {
              scrollToElement(element);
            }
          }}
        >
          {t("home.scroll")}
          <ArrowDownwardRounded />
        </button>
      </div>
      <div className="description">
        <div className="home-contact">
          <strong className="home-label">{t("home.contact")}</strong>
          <span className="home-name">
            {t("home.name")}
            <Tooltip
              placement="right-top"
              className="image-popover"
              content={
                <div className="avatar-container">
                  <img
                    src={images.avatar}
                    loading="lazy"
                    alt={t("home.name")}
                    width={467}
                    height={572}
                  />
                </div>
              }
            >
              <button
                type="button"
                className="contact-badge-button"
                aria-label={t("home.name")}
              >
                <BadgeOutlined />
              </button>
            </Tooltip>
          </span>
          <a className="home-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
        <div className="about-column">
          <strong className="home-label">{t("home.about")}</strong>
          <span>{t("home.description")}</span>
        </div>
      </div>
    </section>
  );
};
