import { lazy, Suspense } from "react";
import { Layout, ConfigProvider, Flex } from "antd";
import type { GetProps } from "antd";
import { useTranslation } from "react-i18next";
import { RunningLine } from "components";
import { SECTION_ID } from "config/sections";
import { Header } from "layout/Header";
import { Home } from "layout/Home";
import { ThemeProvider } from "providers/ThemeProvider";

const Projects = lazy(() =>
  import("layout/Projects").then((module) => ({ default: module.Projects })),
);
const Expertise = lazy(() =>
  import("layout/Expertise").then((module) => ({
    default: module.Expertise,
  })),
);
const Education = lazy(() =>
  import("layout/Education").then((module) => ({
    default: module.Education,
  })),
);
const Experience = lazy(() =>
  import("layout/Experience").then((module) => ({
    default: module.Experience,
  })),
);
const Certificates = lazy(() =>
  import("layout/Certificates").then((module) => ({
    default: module.Certificates,
  })),
);
const Contacts = lazy(() =>
  import("layout/Contacts").then((module) => ({ default: module.Contacts })),
);

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
              <Suspense fallback={null}>
                <Projects />
                <Expertise />
                <Education />
                <Experience />
                <Certificates />
              </Suspense>
              <RunningLine />
            </Flex>
          </Layout.Content>
          <Suspense fallback={null}>
            <Contacts />
          </Suspense>
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
