import { useTranslation } from "react-i18next";
import images from "assets/images";
import { CollapsePanel, ProjectCard } from "components";
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

export const Projects = () => {
  const { t } = useTranslation();

  const renderProjectCards = (
    projects: typeof PROJECTS | typeof PROJECTS_ARCHIVE,
  ) =>
    projects.map(({ textKey, ...preview }) => (
      <div className="project-column" key={preview.title}>
        <ProjectCard {...preview} text={t(textKey)} />
      </div>
    ));

  return (
    <section id={SECTION_ID.projects} className="projects">
      <h2>{t("projects")}</h2>
      <div className="projects-grid">
        {renderProjectCards(PROJECTS)}
      </div>
      <CollapsePanel
        className="projects-archive"
        small
        defaultClosed
        label={t("projects.archive")}
        title={(isOpen) => (
          <span className="projects-archive-title">
            {isOpen ? (
              <FolderOpenFilled className="projects-archive-icon" />
            ) : (
              <FolderFilled className="projects-archive-icon" />
            )}
            {t("projects.archive")}
          </span>
        )}
        content={
          <div className="projects-grid projects-archive-grid">
            {renderProjectCards(PROJECTS_ARCHIVE)}
          </div>
        }
      />
    </section>
  );
};
