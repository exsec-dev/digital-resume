import { Layout, ConfigProvider, Flex } from "antd";
import type { GetProps } from "antd";
import { useTranslation } from "react-i18next";
import { RunningLine } from "components";
import { SECTION_ID } from "config/sections";
import { Header } from "layout/Header";
import { Home } from "layout/Home";
import { Projects } from "layout/Projects";
import { Expertise } from "layout/Expertise";
import { Education } from "layout/Education";
import { Experience } from "layout/Experience";
import { Certificates } from "layout/Certificates";
import { Contacts } from "layout/Contacts";
import { ThemeProvider } from "providers/ThemeProvider";

type ConfigProviderProps = GetProps<typeof ConfigProvider>;

const themeConfig: ConfigProviderProps["theme"] = {
  token: {
    colorPrimary: "var(--primary-color)",
    fontSize: 14,
    fontFamily: '"Geist", system-ui, sans-serif',
    colorText: "var(--primary-color)",
  },
  components: {
    Layout: {
      bodyBg: "var(--bg-color)",
      headerBg: "none",
      footerBg: "none",
    },
    Anchor: {
      colorText: "var(--bg-color)",
      linkPaddingInlineStart: 16,
    },
    Button: {
      primaryShadow: "none",
      colorPrimary: "var(--button-bg)",
    },
    Timeline: {
      itemPaddingBottom: 36,
      dotBg: "none",
      tailColor: "var(--primary-color)",
    },
    Collapse: {
      contentPadding: 0,
      headerPadding: 0,
      contentBg: "transparent",
    },
    Popover: {
      colorBgElevated: "var(--pop-color)",
    },
  },
};

function App() {
  const { t } = useTranslation();

  return (
    <ConfigProvider theme={themeConfig}>
      <ThemeProvider>
        <Layout className="layout">
          <a href={`#${SECTION_ID.home}`} className="skip-link">
            {t("a11y.skipToContent")}
          </a>
          <Header />
          <Layout.Content>
            <Flex vertical className="chapters">
              <Home />
              <Projects />
              <Expertise />
              <Education />
              <Experience />
              <Certificates />
              <RunningLine />
            </Flex>
          </Layout.Content>
          <Contacts />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
