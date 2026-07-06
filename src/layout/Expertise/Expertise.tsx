import { Typography, Flex, Space, Divider } from "antd";
import { useTranslation } from "react-i18next";
import { SECTION_ID } from "config/sections";
import {
  getTranslationList,
  type ListTranslationKey,
  type StringTranslationKey,
} from "utils/i18n";
import "./index.scss";

const EXPERTISE_SECTIONS: {
  titleKey: StringTranslationKey;
  skillsKey?: ListTranslationKey;
  textKey?: StringTranslationKey;
}[] = [
  { titleKey: "expertise.title.web", skillsKey: "expertise.skills.web" },
  { titleKey: "expertise.title.build", skillsKey: "expertise.skills.build" },
  { titleKey: "expertise.title.process", skillsKey: "expertise.skills.process" },
  { titleKey: "expertise.title.design", skillsKey: "expertise.skills.design" },
  { titleKey: "expertise.title.eng", textKey: "expertise.eng.text" },
];

export const Expertise = () => {
  const { t } = useTranslation();

  return (
    <Flex id={SECTION_ID.about} className="expertise" vertical gap={16}>
      <Typography.Title level={2} className="section-title">
        {t("expertise")}
      </Typography.Title>
      <Space direction="vertical" size={42}>
        {EXPERTISE_SECTIONS.map(({ titleKey, skillsKey, textKey }) => (
          <Space className="expertise-section" key={titleKey} direction="vertical">
            <Typography.Title level={3} className="expertise-chapter-title">
              {t(titleKey)}
            </Typography.Title>
            <Divider className="expertise-divider" />
            {skillsKey && (
              <ul className="expertise-skills">
                {getTranslationList(t, skillsKey).map((skill) => (
                  <li key={skill} className="skill-container">
                    {skill}
                  </li>
                ))}
              </ul>
            )}
            {textKey && (
              <Typography.Text className="expertise-text">
                {t(textKey)}
              </Typography.Text>
            )}
          </Space>
        ))}
      </Space>
    </Flex>
  );
};
