import { useMemo, useState } from "react";
import { Typography, Flex, Col, Row, Collapse } from "antd";
import images from "assets/images";
import { ProjectCard } from "components";
import { FolderOpenFilled, FolderFilled } from "components/icons";
import { useTranslation } from "react-i18next";
import "./index.scss";

const PROJECT_CARD_COL_PROPS = {
  xs: { flex: "100%" },
  md: { flex: "46%" },
  lg: { flex: "45%" },
  xl: { flex: "30%" },
} as const;

export const Projects = () => {
  const { t } = useTranslation();
  const [isArchiveOpened, setIsArchiveOpened] = useState<boolean>(false);

  const previews = useMemo(
    () => [
      {
        src: images.generator,
        url: "https://exsec.dev/password-generator",
        title: "Password Generator",
        text: t("projects.utility"),
      },
      {
        src: images.astraedu,
        url: "https://exsec.dev/astraedu",
        title: "AstraEdu",
        text: t("projects.edu"),
      },
      {
        src: images.wordle,
        url: "https://exsec.dev/wordle",
        title: "Wordle",
        text: t("projects.browser"),
      },
    ],
    [t],
  );

  const previewsArchive = useMemo(
    () => [
      {
        src: images.gameOfLife,
        url: "https://exsec.dev/game-of-life",
        title: "Game of Life",
        text: t("projects.browser"),
      },
      {
        src: images.pixelCat,
        url: "https://exsec.dev/pixel-cat",
        title: "Pixel Cat",
        text: t("projects.browser"),
      },
      {
        src: images.astrabot,
        url: "https://t.me/AstraEdu_bot",
        title: "AstraBot",
        text: t("projects.bot"),
      },
      {
        src: images.idle,
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
          <Col key={preview.title} {...PROJECT_CARD_COL_PROPS}>
            <ProjectCard {...preview} />
          </Col>
        ))}
      </Row>
      <Collapse
        className="projects-archive collapse-panel collapse-panel--small"
        activeKey={isArchiveOpened ? "archive" : undefined}
        onChange={(key) => {
          setIsArchiveOpened(
            Array.isArray(key) ? key.includes("archive") : key === "archive",
          );
        }}
        items={[
          {
            key: "archive",
            label: (
              <Typography.Title className="projects-archive-title" level={5}>
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
                {previewsArchive.map((preview) => (
                  <Col key={preview.title} {...PROJECT_CARD_COL_PROPS}>
                    <ProjectCard {...preview} />
                  </Col>
                ))}
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
