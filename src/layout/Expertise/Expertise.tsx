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
    <Flex id="about" vertical gap={16}>
      <Typography.Title level={3}>{t("expertise")}</Typography.Title>
      <Space direction="vertical" size={42}>
        {content.map((chapter) => {
          return (
            <Space
              key={chapter.title}
              direction="vertical"
              style={{ width: "100%" }}
            >
              <Typography.Title level={4}>{chapter.title}</Typography.Title>
              <Divider
                style={{
                  margin: 0,
                  opacity: 0.2,
                  borderBlockStart: "0.1rem solid var(--primary-color)",
                }}
              />
              <Flex wrap gap={6} style={{ marginTop: "8px" }}>
                {chapter.skills?.map((item) => (
                  <div key={item} className="skill-container">
                    {item}
                  </div>
                ))}
              </Flex>
              <Typography.Text style={{ letterSpacing: "0.02rem" }}>
                {chapter.text}
              </Typography.Text>
            </Space>
          );
        })}
      </Space>
    </Flex>
  );
};
