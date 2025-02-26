import React from "react";
import { Typography, Flex, Space, Divider } from "antd";
import "./index.scss";

const content = [
  {
    title: "Web Development",
    skills: [
      "JavaScript / TypeScript",
      "React",
      "HTML",
      "CSS / SCSS",
      "Git",
      "Material UI / Antd",
      "Redux",
      "SQL",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "Design",
    skills: [
      "Figma",
      "UI/UX",
      "Adobe Illustrator, Photoshop",
      "Pixso",
      "Composition and Color Theory",
      "Typography",
    ],
  },
  {
    title: "English Proficiency",
    text: "MISIS English Language Test – CEFR level B2 (Upper Intermediate)",
  },
];

export const Expertise = () => {
  return (
    <Flex id="about" vertical gap={16}>
      <Typography.Title level={3}>Expertise</Typography.Title>
      <Space direction="vertical" size={42}>
        {content.map((chapter) => {
          return (
            <Space
              key={chapter.title}
              direction="vertical"
              style={{ width: "100%" }}
            >
              <Typography.Title
                level={4}
                style={{ margin: "0 0 8px", fontWeight: 500 }}
              >
                {chapter.title}
              </Typography.Title>
              <Divider
                style={{
                  margin: 0,
                  opacity: 0.2,
                  borderBlockStart: "1.5px solid var(--primary-color)",
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
