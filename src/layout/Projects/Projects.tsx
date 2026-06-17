import { useMemo, useState } from "react";
import { Typography, Flex, Col, Row, Collapse } from "antd";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "components";
import { FolderOpenFilled, FolderFilled } from "components/icons";
import { SECTION_ID } from "config/sections";
import {
  PROJECTS,
  PROJECTS_ARCHIVE,
  type ProjectPreview,
} from "./projects.data";
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

  const [previews, previewsArchive] = useMemo(() => {
    const toCard = ({ textKey, ...rest }: ProjectPreview) => ({
      ...rest,
      text: t(textKey),
    });
    return [PROJECTS.map(toCard), PROJECTS_ARCHIVE.map(toCard)];
  }, [t]);

  return (
    <Flex id={SECTION_ID.projects} vertical gap={16}>
      <Typography.Title level={2} className="section-title">
        {t("projects")}
      </Typography.Title>
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
        onChange={(keys) =>
          setIsArchiveOpened([keys].flat().includes("archive"))
        }
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
