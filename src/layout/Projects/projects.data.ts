import images from "assets/images";
import type { ProjectSummary } from "types/project";

export interface ProjectPreview extends ProjectSummary {
  textKey:
    | "projects.utility"
    | "projects.edu"
    | "projects.browser"
    | "projects.bot"
    | "projects.service";
}

export const PROJECTS: ProjectPreview[] = [
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
];

export const PROJECTS_ARCHIVE: ProjectPreview[] = [
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
];
