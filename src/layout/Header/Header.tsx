import { useMemo } from "react";
import { Layout, Anchor, Flex, Tooltip, Button } from "antd";
import { Logo, ThemeSwitcher } from "components";
import { DownloadRounded, PublicRounded } from "components/icons";
import { useTranslation } from "react-i18next";
import "./index.scss";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };

  const items = useMemo(
    () => [
      {
        key: "home",
        href: "#home",
        title: t("header.menu.home"),
      },
      {
        key: "projects",
        href: "#projects",
        title: t("header.menu.projects"),
      },
      {
        key: "about",
        href: "#about",
        title: t("header.menu.about"),
      },
    ],
    [t],
  );

  return (
    <Layout.Header className="header">
      <Flex justify="space-between" align="center" style={{ height: "100%" }}>
        <Logo />
        <Flex gap={18}>
          <Anchor
            className="navigation"
            items={items}
            bounds={240}
            targetOffset={100}
            direction="horizontal"
          />
          <Flex className="button-container" gap={2}>
            <ThemeSwitcher />
            <Tooltip
              title={t("header.tooltip.lang")}
              placement="bottom"
              destroyOnHidden
            >
              <Button
                variant="filled"
                color="default"
                shape="circle"
                aria-label={t("header.tooltip.lang")}
                onClick={changeLanguage}
              >
                <PublicRounded />
              </Button>
            </Tooltip>
            <Button
              className="download"
              type="primary"
              href="/assets/files/CV.pdf"
              download="Prozhirko_CV.pdf"
              iconPosition="end"
              icon={<DownloadRounded />}
            >
              {t("header.tooltip.pdf")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};
