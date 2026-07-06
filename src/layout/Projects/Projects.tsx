import { useState } from "react";
import { Typography, Flex, Col, Row, Collapse } from "antd";
import { useTranslation } from "react-i18next";
import images from "assets/images";
import { ProjectCard } from "components";
import { FolderOpenFilled, FolderFilled } from "components/icons";
import { SECTION_ID } from "config/sections";
import "./index.scss";

const PROJECTS = [
  {
    src: images.generator,
    url: "https://exsec.dev/password-generator",
    title: "Password Generator",
    textKey: "projects.utility",
  },
  {
    src: images.astraedu,
    url: "https://exsec.dev/astraedu",
    title: "AstraEdu",
    textKey: "projects.edu",
  },
  {
    src: images.wordle,
    url: "https://exsec.dev/wordle",
    title: "Wordle",
    textKey: "projects.browser",
  },
] as const;

const PROJECTS_ARCHIVE = [
  {
    src: images.gameOfLife,
    url: "https://exsec.dev/game-of-life",
    title: "Game of Life",
    textKey: "projects.browser",
  },
  {
    src: images.pixelCat,
    url: "https://exsec.dev/pixel-cat",
    title: "Pixel Cat",
    textKey: "projects.browser",
  },
  {
    src: images.astrabot,
    url: "https://t.me/AstraEdu_bot",
    title: "AstraBot",
    textKey: "projects.bot",
  },
  {
    src: images.idle,
    url: "https://exsec.dev/idlebot",
    title: "Idle Project",
    textKey: "projects.service",
  },
] as const;

const PROJECT_CARD_COL_PROPS = {
  xs: { flex: "100%" },
  md: { flex: "46%" },
  lg: { flex: "45%" },
  xl: { flex: "30%" },
} as const;

export const Projects = () => {
  const { t } = useTranslation();
  const [isArchiveOpened, setIsArchiveOpened] = useState(false);

  const renderProjectCards = (
    projects: typeof PROJECTS | typeof PROJECTS_ARCHIVE,
  ) =>
    projects.map(({ textKey, ...preview }) => (
      <Col key={preview.title} {...PROJECT_CARD_COL_PROPS}>
        <ProjectCard {...preview} text={t(textKey)} />
      </Col>
    ));

  return (
    <Flex id={SECTION_ID.projects} vertical gap={16}>
      <Typography.Title level={2}>{t("projects")}</Typography.Title>
      <Row gutter={[0, 40]} justify="space-between" wrap>
        {renderProjectCards(PROJECTS)}
      </Row>
      <Collapse
        className="projects-archive collapse-panel collapse-panel--small"
        activeKey={isArchiveOpened ? "archive" : undefined}
        onChange={(keys) => setIsArchiveOpened(keys.includes("archive"))}
        items={[
          {
            key: "archive",
            label: (
              <Typography.Title className="projects-archive-title" level={3}>
                {isArchiveOpened ? (
                  <FolderOpenFilled className="projects-archive-icon" />
                ) : (
                  <FolderFilled className="projects-archive-icon" />
                )}
                {t("projects.archive")}
              </Typography.Title>
            ),
            children: (
              <Row
                className="projects-archive-grid"
                gutter={[0, 40]}
                justify="space-between"
                wrap
              >
                {renderProjectCards(PROJECTS_ARCHIVE)}
              </Row>
            ),
          },
        ]}
        size="small"
        expandIconPosition="end"
      />
    </Flex>
  );
};
