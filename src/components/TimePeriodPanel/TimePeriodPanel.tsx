import { Typography, Space, Divider, Flex, Popover, Button } from "antd";
import clsx from "clsx";
import { InfoCircleOutlined } from "components/icons";
import "./index.scss";

interface TimePeriodPanelProps {
  title: string;
  subtitle: string;
  period: string;
  isSmall?: boolean;
  info?: {
    title: string;
    text: string[];
  };
}

export const TimePeriodPanel = ({
  title,
  subtitle,
  period,
  isSmall,
  info,
}: TimePeriodPanelProps) => {
  return (
    <Space
      className={clsx("timeperiod", isSmall && "timeperiod--small")}
      direction="vertical"
      size={isSmall ? 6 : 8}
    >
      <Space
        className="timeperiod-data"
        direction="vertical"
        size={isSmall ? 0 : 4}
      >
        <Typography.Text className="timeperiod-data-title">
          {title}
        </Typography.Text>
        <Flex align="center" gap={2}>
          <Typography.Text className="timeperiod-data-additional">
            {subtitle}
          </Typography.Text>
          {info ? (
            <Popover
              placement="leftTop"
              trigger={["hover", "focus"]}
              destroyOnHidden
              classNames={{
                body: "info-popover",
              }}
              styles={{
                body: { padding: "12px 18px 14px" },
              }}
              content={
                <Space
                  className="popover-container"
                  direction="vertical"
                  size={2}
                >
                  <Typography.Title level={5}>{info.title}</Typography.Title>
                  <Space direction="vertical" size={0}>
                    {info.text.map((item, i) => (
                      <Typography.Text key={i}>{item}</Typography.Text>
                    ))}
                  </Space>
                </Space>
              }
            >
              <Button
                type="text"
                shape="circle"
                size="small"
                aria-label={info.title}
              >
                <InfoCircleOutlined />
              </Button>
            </Popover>
          ) : null}
        </Flex>
      </Space>
      <Divider />
      <Typography.Text italic className="timeperiod-period">
        {period}
      </Typography.Text>
    </Space>
  );
};
