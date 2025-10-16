import React, { useState } from "react";
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
import { MainContext, Scheme } from "MainContext";

type ConfigProviderProps = GetProps<typeof ConfigProvider>;
const getTheme = (): ConfigProviderProps["theme"] => {
  return {
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
        headerPadding: "0 !important",
        contentBg: "transparent",
      },
      Popover: {
        colorBgElevated: "var(--pop-color)",
      },
    },
  };
};

function App() {
  const [scheme, setScheme] = useState<Scheme>(
    (localStorage.getItem("scheme") as Scheme) || "light",
  );

  return (
    <ConfigProvider theme={getTheme()}>
      <MainContext.Provider
        value={{
          scheme,
          toggleScheme: (value: Scheme) => {
            setScheme(value);
          },
        }}
      >
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
      </MainContext.Provider>
    </ConfigProvider>
  );
}

export default App;
