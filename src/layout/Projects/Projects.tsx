import React from "react";
import { Typography, Flex, Col, Row } from "antd";
import { ProjectCard } from "components";
import { useTranslation } from "react-i18next";
import proj1 from "../../assets/images/pixel-cat.png";
import proj2 from "../../assets/images/astraedu.png";
import proj3 from "../../assets/images/wordle.png";
import proj4 from "../../assets/images/game-of-life.png";
import "./index.scss";

export const Projects = () => {
  const { t } = useTranslation();

  const previews = [
    {
      src: proj1,
      url: "https://exsec.dev/pixel-cat",
      title: "Pixel Cat",
      text: t("projects.browser"),
    },
    {
      src: proj2,
      url: "https://exsec.dev/astraedu",
      title: "AstraEdu",
      text: t("projects.edu"),
    },
    {
      src: proj3,
      url: "https://exsec.dev/wordle",
      title: "Wordle",
      text: t("projects.browser"),
    },
    {
      src: proj4,
      url: "https://exsec.dev/game-of-life",
      title: "Game of Life",
      text: t("projects.browser"),
    },
  ];

  return (
    <Flex id="projects" vertical gap={16}>
      <Typography.Title level={3}>{t("projects")}</Typography.Title>
      <Row gutter={[0, 40]} justify="space-between">
        {previews.map((preview) => (
          <Col
            key={preview.src}
            xs={{ flex: "100%" }}
            sm={{ flex: "100%" }}
            md={{ flex: "46%" }}
            lg={{ flex: "45%" }}
            xl={{ flex: "30%" }}
          >
            <ProjectCard {...preview} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};
