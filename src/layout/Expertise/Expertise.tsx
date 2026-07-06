import { Typography, Flex, Space, Divider } from "antd";
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
    <Flex id={SECTION_ID.about} className="expertise" vertical gap={16}>
      <Typography.Title level={2}>{t("expertise")}</Typography.Title>
      <Space direction="vertical" size={42}>
        {EXPERTISE_SECTIONS.map((section) => (
          <Space
            className="expertise-section"
            key={section.titleKey}
            direction="vertical"
          >
            <Typography.Title level={3} className="expertise-chapter-title">
              {t(section.titleKey)}
            </Typography.Title>
            <Divider className="expertise-divider" />
            {"skillsKey" in section ? (
              <ul className="expertise-skills">
                {getTranslationList(t, section.skillsKey).map((skill) => (
                  <li key={skill} className="skill-container">
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text className="expertise-text">
                {t(section.textKey)}
              </Typography.Text>
            )}
          </Space>
        ))}
      </Space>
    </Flex>
  );
};
