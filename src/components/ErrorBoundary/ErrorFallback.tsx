import { Typography, Flex, Button } from "antd";
import { useTranslation } from "react-i18next";
import "./index.scss";

interface ErrorFallbackProps {
  onReload: () => void;
}

export const ErrorFallback = ({ onReload }: ErrorFallbackProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      className="error-fallback"
      vertical
      align="center"
      justify="center"
      gap={16}
    >
      <Typography.Title className="error-fallback-title" level={3}>
        {t("error.title")}
      </Typography.Title>
      <Typography.Text className="error-fallback-description">
        {t("error.description")}
      </Typography.Text>
      <Button type="primary" onClick={onReload}>
        {t("error.reload")}
      </Button>
    </Flex>
  );
};
