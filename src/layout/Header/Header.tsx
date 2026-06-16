import { useMemo } from "react";
import { Layout, Anchor, Flex, Tooltip, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Logo, ThemeSwitcher } from "components";
import { DownloadRounded, PublicRounded } from "components/icons";
import { CV_PATH } from "config/contacts";
import { SECTION_ID } from "config/sections";
import "./index.scss";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const targetLanguage = i18n.resolvedLanguage === "ru" ? "en" : "ru";
  const languageLabel = t(`a11y.lang.${targetLanguage}`);

  const changeLanguage = () => {
    i18n.changeLanguage(targetLanguage);
  };

  const items = useMemo(
    () => [
      {
        key: "home",
        href: `#${SECTION_ID.home}`,
        title: t("header.menu.home"),
      },
      {
        key: "projects",
        href: `#${SECTION_ID.projects}`,
        title: t("header.menu.projects"),
      },
      {
        key: "about",
        href: `#${SECTION_ID.about}`,
        title: t("header.menu.about"),
      },
    ],
    [t],
  );

  return (
    <Layout.Header className="header">
      <Flex className="header-inner" justify="space-between" align="center">
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
                aria-label={languageLabel}
                onClick={changeLanguage}
              >
                <PublicRounded />
              </Button>
            </Tooltip>
            <Button
              className="download"
              type="primary"
              href={CV_PATH}
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
