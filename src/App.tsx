import React from "react";
import { Layout, ConfigProvider, Flex } from "antd";
import type { GetProps } from "antd";
import { RunningLine } from "components";
import {
  Header,
  Home,
  Projects,
  Expertise,
  Education,
  Experience,
  Certificates,
  Contacts,
} from "layout";

type ConfigProviderProps = GetProps<typeof ConfigProvider>;
const getTheme = (): ConfigProviderProps["theme"] => {
  return {
    token: {
      colorPrimary: "var(--primary-color)",
      fontSize: 14,
      fontFamily: '"Geist", "Golos Text", sans-serif',
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
        linkPaddingInlineStart: 36,
      },
      Button: {
        primaryShadow: "none",
      },
      Timeline: {
        itemPaddingBottom: 36,
        dotBg: "none",
        tailColor: "var(--primary-color)",
      },
      Collapse: {
        contentPadding: 0,
        headerPadding: 0,
      },
      Popover: {
        colorBgElevated: "var(--pop-color)",
      },
    },
  };
};

function App() {
  return (
    <ConfigProvider theme={getTheme()}>
      <Layout className="layout">
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
    </ConfigProvider>
  );
}

export default App;
