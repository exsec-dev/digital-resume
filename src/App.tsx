import { useTranslation } from "react-i18next";
import { RunningLine } from "components";
import { SECTION_ID } from "config/sections";
import { Certificates } from "layout/Certificates";
import { Contacts } from "layout/Contacts";
import { Education } from "layout/Education";
import { Experience } from "layout/Experience";
import { Expertise } from "layout/Expertise";
import { Header } from "layout/Header";
import { Home } from "layout/Home";
import { Projects } from "layout/Projects";
import { ThemeProvider } from "providers/ThemeProvider";

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <div className="layout">
        <a href={`#${SECTION_ID.home}`} className="skip-link">
          {t("a11y.skipToContent")}
        </a>
        <Header />
        <main>
          <div className="chapters">
            <Home />
            <Projects />
            <Expertise />
            <Education />
            <Experience />
            <Certificates />
            <RunningLine />
          </div>
        </main>
        <Contacts />
      </div>
    </ThemeProvider>
  );
}

export default App;
