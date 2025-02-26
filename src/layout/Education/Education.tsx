import React from "react";
import { Space } from "antd";
import { TimePeriodPanel, CollapsePanel } from "components";

export const Education = () => {
  return (
    <CollapsePanel
      title="Education"
      content={
        <Space direction="vertical" size={36} style={{ width: "100%" }}>
          <TimePeriodPanel
            title="Master's Degree: National University of Science and Technology MISIS"
            subtitle="Implementation of Sophisticated Digital Systems Based on Integrated IT-Solutions, 09.04.02"
            period="Sep 2024 – Present"
          />
          <TimePeriodPanel
            title="Bachelor's Degree: National University of Science and Technology MISIS"
            subtitle="Applied Computer Science in Design, 09.03.03"
            period="Sep 2020 – Jun 2024"
          />
        </Space>
      }
    />
  );
};
