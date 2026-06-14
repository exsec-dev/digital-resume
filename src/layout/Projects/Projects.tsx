import { useMemo, useState } from "react";
import { FolderOpenFilled, FolderFilled } from "@ant-design/icons";
import { Typography, Flex, Col, Row, Collapse } from "antd";
import images from "assets/images";
import { ProjectCard } from "components";
import { useTranslation } from "react-i18next";

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
      </Row>
      <Collapse
        className="collapse-panel--small"
        activeKey={isArchiveOpened ? "archive" : undefined}
        onChange={() => setIsArchiveOpened(!isArchiveOpened)}
        items={[
          {
            key: "archive",
            label: (
              <Typography.Title
                level={5}
                style={{
                  opacity: 0.7,
                  marginBottom: 0,
                  fontSize: "15px",
                  padding: "8px 16px",
                  width: "fit-content",
                }}
              >
                {isArchiveOpened ? (
                  <FolderOpenFilled style={{ marginRight: 8 }} />
                ) : (
                  <FolderFilled style={{ marginRight: 8 }} />
                )}
                {t("projects.archive")}
              </Typography.Title>
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
      />
    </Flex>
  );
};
