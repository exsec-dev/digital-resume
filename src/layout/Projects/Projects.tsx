import React, { useMemo } from "react";
import { Typography, Flex, Col, Row, Collapse, Space } from "antd";
import { RightOutlined, FolderOpenFilled } from "@ant-design/icons";
import { ProjectCard } from "components";
import { useTranslation } from "react-i18next";
import proj1 from "../../assets/images/astraedu.webp";
import proj2 from "../../assets/images/wordle.webp";
import proj3 from "../../assets/images/pixel-cat.webp";
import proj4 from "../../assets/images/game-of-life.webp";
import proj5 from "../../assets/images/astrabot.webp";
import proj6 from "../../assets/images/idle.webp";

export const Projects = () => {
  const { t } = useTranslation();

  const previews = useMemo(
    () => [
      {
        src: proj1,
        url: "https://exsec.dev/astraedu",
        title: "AstraEdu",
        text: t("projects.edu"),
      },
      {
        src: proj2,
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
    ],
    [t],
  );

  const previewsArchive = useMemo(
    () => [
      {
        src: proj3,
        url: "https://exsec.dev/pixel-cat",
        title: "Pixel Cat",
        text: t("projects.browser"),
      },
      {
        src: proj5,
        url: "https://t.me/AstraEdu_bot",
        title: "AstraBot",
        text: t("projects.bot"),
      },
      {
        src: proj6,
        url: "https://exsec.dev/idlebot",
        title: "Idle Project",
        text: t("projects.service"),
      },
    ],
    [t],
  );

  return (
    <Flex id="projects" vertical gap={16}>
      <Typography.Title level={3}>{t("projects")}</Typography.Title>
      <Row gutter={[0, 40]} justify="space-between" wrap>
        {previews.map((preview) => (
          <Col
            key={preview.title}
            xs={{ flex: "100%" }}
            md={{ flex: "46%" }}
            lg={{ flex: "45%" }}
            xl={{ flex: "30%" }}
          >
            <ProjectCard {...preview} />
          </Col>
        ))}
        {previews.length % 3 !== 0 ? (
          <Col
            style={{
              visibility: "hidden",
              pointerEvents: "none",
            }}
            xs={{ flex: "100%" }}
            md={{ flex: "46%" }}
            lg={{ flex: "45%" }}
            xl={{ flex: "30%" }}
          />
        ) : null}
      </Row>
      <Collapse
        items={[
          {
            key: "archive",
            label: (
              <Space
                direction="vertical"
                size={0}
                style={{ width: "100%", padding: "8px 16px" }}
              >
                <Typography.Title
                  level={5}
                  style={{
                    opacity: 0.7,
                    marginBottom: 0,
                    fontSize: "15px",
                    transition: "color 0.2s var(--bezier-animation)",
                  }}
                >
                  <FolderOpenFilled style={{ marginRight: 6 }} />
                  {t("projects.archive")}
                </Typography.Title>
              </Space>
            ),
            children: (
              <Row
                gutter={[0, 40]}
                justify="space-between"
                wrap
                style={{ padding: "20px 28px 24px" }}
              >
                {previewsArchive.map((preview) => (
                  <Col
                    key={preview.title}
                    xs={{ flex: "100%" }}
                    md={{ flex: "46%" }}
                    lg={{ flex: "45%" }}
                    xl={{ flex: "30%" }}
                  >
                    <ProjectCard {...preview} />
                  </Col>
                ))}
                {previewsArchive.length % 3 !== 0 ? (
                  <Col
                    style={{
                      visibility: "hidden",
                      pointerEvents: "none",
                    }}
                    xs={{ flex: "100%" }}
                    md={{ flex: "46%" }}
                    lg={{ flex: "45%" }}
                    xl={{ flex: "30%" }}
                  />
                ) : null}
              </Row>
            ),
          },
        ]}
        size="small"
        expandIconPosition="end"
        style={{
          marginTop: 32,
          backgroundColor: "var(--pop-color)",
        }}
        expandIcon={({ isActive }) => (
          <RightOutlined
            id="archive"
            rotate={isActive ? 90 : 0}
            style={{ top: 1, right: 12, position: "relative" }}
          />
        )}
      />
    </Flex>
  );
};
