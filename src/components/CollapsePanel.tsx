import React from "react";
import { Typography, Collapse } from "antd";

export const CollapsePanel = ({
  title,
  content,
  defaultClosed,
}: {
  title: React.ReactNode;
  content: React.ReactNode;
  defaultClosed?: boolean;
}) => {
  return (
    <Collapse
      className="collapse-panel"
      defaultActiveKey={defaultClosed ? undefined : ["1"]}
      expandIconPosition="end"
      ghost
      items={[
        {
          key: "1",
          label: (
            <Typography.Title level={3} style={{ width: "fit-content" }}>
              {title}
            </Typography.Title>
          ),
          children: content,
        },
      ]}
    />
  );
};
