import { useMemo } from "react";
import { Typography, Flex, Space, Divider } from "antd";
import { useTranslation } from "react-i18next";
import "./index.scss";

export const Expertise = () => {
  const { t } = useTranslation();

  const content = useMemo(
    () => [
      {
        title: t("expertise.title.web"),
        skills: [
          "TypeScript",
          "JavaScript (ES2020+)",
          "React",
          "React Router",
          "React Query",
          "REST APIs",
          "i18next",
          "CSS / SCSS",
          "Ant Design / Material UI",
        ],
      },
      {
        title: t("expertise.title.build"),
        skills: [
          "Webpack / Vite",
          "Git",
          "Docker",
          "Linux",
          "Nginx",
          "Node.js",
          "SQL",
          t("expertise.skills.performance"),
        ],
      },
      {
        title: t("expertise.title.design"),
        skills: [
          t("expertise.skills.ui-ux"),
          t("expertise.skills.systems"),
          t("expertise.skills.prototyping"),
          t("expertise.skills.color"),
          t("expertise.skills.typo"),
          "Figma",
          "Adobe Illustrator",
          "Pixso",
        ],
      },
      {
        title: t("expertise.title.eng"),
        text: "English Language Test – CEFR level B2 (Upper Intermediate)",
      },
    ],
    [t],
  );

  return (
    <Flex id="about" className="expertise" vertical gap={16}>
      <Typography.Title level={3}>{t("expertise")}</Typography.Title>
      <Space direction="vertical" size={42}>
        {content.map((chapter) => {
          return (
            <Space
              className="expertise-section"
              key={chapter.title}
              direction="vertical"
            >
              <Typography.Title level={4}>{chapter.title}</Typography.Title>
              <Divider className="expertise-divider" />
              <Flex className="expertise-skills" wrap gap={6}>
                {chapter.skills?.map((item) => (
                  <div key={item} className="skill-container">
                    {item}
                  </div>
                ))}
              </Flex>
              <Typography.Text className="expertise-text">
                {chapter.text}
              </Typography.Text>
            </Space>
          );
        })}
      </Space>
    </Flex>
  );
};
