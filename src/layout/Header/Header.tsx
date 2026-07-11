import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Logo, Tooltip, ThemeSwitcher } from "components";
import { DownloadRounded, PublicRounded } from "components/icons";
import { CV_PATH } from "config/contacts";
import { SECTION_ID } from "config/sections";
import { scrollToElement } from "utils/scrollToElement";
import "./index.scss";

const NAVIGATION_IDS = [
  SECTION_ID.home,
  SECTION_ID.projects,
  SECTION_ID.about,
] as const;

const SCROLL_CHECK_IDS = [...NAVIGATION_IDS].reverse();

export const Header = () => {
  const { t, i18n } = useTranslation();
  const targetLanguage = i18n.resolvedLanguage === "ru" ? "en" : "ru";
  const languageLabel = t(`a11y.lang.${targetLanguage}`);

  const changeLanguage = () => {
    i18n.changeLanguage(targetLanguage);
  };

  const [activeSection, setActiveSection] = useState<string>(SECTION_ID.home);

  useEffect(() => {
    const updateActiveSection = () => {
      const active = SCROLL_CHECK_IDS.find((id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 120;
      });
      setActiveSection(active ?? SECTION_ID.home);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.history.replaceState(null, "", `#${id}`);
    scrollToElement(element, 100);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <div className="header-controls">
          <nav className="navigation">
            {NAVIGATION_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={clsx(
                  "navigation-link",
                  activeSection === id && "navigation-link--active",
                )}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(id);
                }}
              >
                {t(`header.menu.${id}`)}
              </a>
            ))}
          </nav>
          <div className="button-container">
            <ThemeSwitcher />
            <Tooltip
              content={t("header.tooltip.lang")}
              placement="bottom"
              variant="tooltip"
            >
              <button
                type="button"
                className="button button--circle header-icon-button"
                aria-label={languageLabel}
                onClick={changeLanguage}
              >
                <PublicRounded />
              </button>
            </Tooltip>
            <a
              className="button button--primary download"
              href={CV_PATH}
              download="Prozhirko_CV.pdf"
            >
              {t("header.tooltip.pdf")}
              <DownloadRounded />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
