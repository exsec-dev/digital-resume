import { type ReactNode } from "react";
import { Typography, Collapse } from "antd";
import "./index.scss";

interface CollapsePanelProps {
  title: ReactNode;
  content: ReactNode;
  defaultClosed?: boolean;
}

export const CollapsePanel = ({
  title,
  content,
  defaultClosed,
}: CollapsePanelProps) => {
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
            <Typography.Title
              className="collapse-panel-title section-title"
              level={2}
            >
              {title}
            </Typography.Title>
          ),
          children: content,
        },
      ]}
    />
  );
};
