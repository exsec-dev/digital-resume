import { useState } from "react";
import { Typography, Space } from "antd";
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
    <Space className="project-card" direction="vertical" size={16}>
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
        <Space size={0} align="start" className="project-image-mask">
          <Typography.Text className="project-image-label">
            {t("projects.open")}
          </Typography.Text>
          <ArrowOutwardRounded className="project-image-icon" />
        </Space>
      </a>
      <Space direction="vertical" size={0}>
        <Typography.Title className="project-card-title" level={3}>
          {title}
        </Typography.Title>
        <Typography.Text className="project-card-text">{text}</Typography.Text>
      </Space>
    </Space>
  );
};
