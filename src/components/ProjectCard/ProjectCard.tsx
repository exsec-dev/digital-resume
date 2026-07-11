import { useState } from "react";
import { useTranslation } from "react-i18next";
import fallbackImage from "assets/images/project-fallback.svg";
import { ArrowOutwardRounded } from "components/icons";
import "./index.scss";

interface ProjectCardProps {
  src: string;
  url: string;
  title: string;
  text: string;
}

export const ProjectCard = ({ src, url, title, text }: ProjectCardProps) => {
  const { t } = useTranslation();
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <article className="project-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image"
      >
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          width={1028}
          height={868}
          onError={() => setImgSrc(fallbackImage)}
        />
        <span className="project-image-mask">
          <span className="project-image-label">{t("projects.open")}</span>
          <ArrowOutwardRounded className="project-image-icon" />
        </span>
      </a>
      <div className="project-card-description">
        <h3 className="project-card-title">{title}</h3>
        <span className="project-card-text">{text}</span>
      </div>
    </article>
  );
};
