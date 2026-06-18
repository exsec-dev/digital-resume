import { useMemo } from "react";
import { Typography, Flex, Space, Divider } from "antd";
import { useTranslation } from "react-i18next";
import { SECTION_ID } from "config/sections";
import "./index.scss";

export const Expertise = () => {
  const { t } = useTranslation();

  const content = useMemo(
    () => [
      {
        title: t("expertise.title.web"),
        skills: [
          "TypeScript",
          "JavaScript",
          "React",
          "React Router",
          "React Query",
          "Redux",
          "React Hook Form",
          "CSS / SCSS",
          "Ant Design / Material UI",
          "i18next",
          "Accessibility (a11y)",
        ],
      },
      {
        title: t("expertise.title.build"),
        skills: [
          "Git",
          "ESLint / Prettier",
          "Webpack / Vite",
          "Node.js",
          "SQL",
          "Docker",
          "Linux",
          "Nginx",
        ],
      },
      {
        title: t("expertise.title.process"),
        skills: [
          "Code Review",
          t("expertise.skills.requirements"),
          t("expertise.skills.techdoc"),
          "UML / System Modeling",
          "BPMN",
          t("expertise.skills.risk"),
          "Agile / Scrum",
        ],
      },
      {
        title: t("expertise.title.design"),
        skills: [
          t("expertise.skills.ui-ux"),
          t("expertise.skills.prototyping"),
          t("expertise.skills.color"),
          t("expertise.skills.typo"),
          "Figma",
          "Pixso",
          "Adobe Illustrator",
        ],
      },
      {
        title: t("expertise.title.eng"),
        text: t("expertise.eng.text"),
      },
    ],
    [t],
  );

  return (
    <Flex id={SECTION_ID.about} className="expertise" vertical gap={16}>
      <Typography.Title level={2} className="section-title">
        {t("expertise")}
      </Typography.Title>
      <Space direction="vertical" size={42}>
        {content.map((chapter) => (
          <Space
            className="expertise-section"
            key={chapter.title}
            direction="vertical"
          >
            <Typography.Title level={3} className="expertise-chapter-title">
              {chapter.title}
            </Typography.Title>
            <Divider className="expertise-divider" />
            <ul className="expertise-skills">
              {chapter.skills?.map((item) => (
                <li key={item} className="skill-container">
                  {item}
                </li>
              ))}
            </ul>
            <Typography.Text className="expertise-text">
              {chapter.text}
            </Typography.Text>
          </Space>
        ))}
      </Space>
    </Flex>
  );
};
