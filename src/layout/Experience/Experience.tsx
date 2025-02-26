import React from "react";
import { Timeline } from "antd";
import { FiberManualRecord } from "@mui/icons-material";
import { LoadingOutlined } from "@ant-design/icons";
import { TimePeriodPanel, CollapsePanel } from "components";
import "./index.scss";

export const Experience = () => {
  return (
    <CollapsePanel
      title="Experience"
      content={
        <Timeline
          style={{ marginTop: "16px" }}
          pending={
            <TimePeriodPanel
              title="Astra Group of Companies"
              subtitle="Frontend Developer"
              period="Aug 2024 – Present"
              isSmall
            />
          }
          pendingDot={
            <LoadingOutlined
              style={{ color: "var(--primary-color)", opacity: 0.3 }}
            />
          }
          reverse
          items={[
            {
              dot: (
                <FiberManualRecord style={{ fontSize: "13px", opacity: 0.2 }} />
              ),
              color: "var(--primary-color)",
              children: (
                <TimePeriodPanel
                  title="Startup Project: Tourism Service for Personalized Accommodation Selection"
                  subtitle="Lead Technical Manager"
                  period="Oct 2022 – Sep 2023"
                  info={{
                    title: "Responsibilities",
                    text: [
                      "Development and debugging of the service architecture using React and Python",
                      "Task planning and distribution",
                      "Collaboration with external technical partners",
                    ],
                  }}
                  isSmall
                />
              ),
            },
            {
              dot: (
                <FiberManualRecord style={{ fontSize: "13px", opacity: 0.2 }} />
              ),
              color: "var(--primary-color)",
              children: (
                <TimePeriodPanel
                  title="Department of Information Technologies of Moscow"
                  subtitle="Junior Frontend Developer"
                  period="Feb 2024 – Jul 2024"
                  info={{
                    title: "Responsibilities",
                    text: [
                      "Development of React components for automation tools",
                      "Code refactoring and optimization",
                      "User interface issue resolution",
                      "Creation of technical documentation and operational guidelines",
                    ],
                  }}
                  isSmall
                />
              ),
            },
          ]}
        />
      }
    />
  );
};
