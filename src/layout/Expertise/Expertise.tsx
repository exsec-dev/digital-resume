import { useTranslation } from "react-i18next";
import { SECTION_ID } from "config/sections";
import { getTranslationList } from "utils/i18n";
import "./index.scss";

const EXPERTISE_SECTIONS = [
  { titleKey: "expertise.title.web", skillsKey: "expertise.skills.web" },
  { titleKey: "expertise.title.build", skillsKey: "expertise.skills.build" },
  { titleKey: "expertise.title.process", skillsKey: "expertise.skills.process" },
  { titleKey: "expertise.title.design", skillsKey: "expertise.skills.design" },
  { titleKey: "expertise.title.eng", textKey: "expertise.eng.text" },
] as const;

export const Expertise = () => {
  const { t } = useTranslation();

  return (
    <section id={SECTION_ID.about} className="expertise">
      <h2>{t("expertise")}</h2>
      <div className="expertise-sections">
        {EXPERTISE_SECTIONS.map((section) => (
          <section className="expertise-section" key={section.titleKey}>
            <h3 className="expertise-chapter-title">{t(section.titleKey)}</h3>
            <hr className="expertise-divider" />
            {"skillsKey" in section ? (
              <ul className="expertise-skills">
                {getTranslationList(t, section.skillsKey).map((skill) => (
                  <li key={skill} className="skill-container">
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="expertise-text">{t(section.textKey)}</span>
            )}
          </section>
        ))}
      </div>
    </section>
  );
};
