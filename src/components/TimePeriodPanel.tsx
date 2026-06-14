import { InfoCircleOutlined } from "@ant-design/icons";
import { Typography, Space, Divider, Flex, Popover, Button } from "antd";

export const TimePeriodPanel = ({
  title,
  subtitle,
  period,
  isSmall,
  info,
}: {
  title: string;
  subtitle: string;
  period: string;
  isSmall?: boolean;
  info?: {
    title: string;
    text: string[];
  };
}) => {
  return (
    <Space className="timeperiod" direction="vertical" size={isSmall ? 6 : 8}>
      <Space
        className="timeperiod-data"
        direction="vertical"
        size={isSmall ? 0 : 4}
      >
        <Flex justify="space-between" align="start" gap={6}>
          <Typography.Text
            className="timeperiod-data-title"
            style={{ fontSize: isSmall ? 15 : 16 }}
          >
            {title}
          </Typography.Text>
          {info ? (
            <Popover
              placement="leftTop"
              trigger="hover"
              destroyOnHidden
              classNames={{
                body: "info-popover",
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
              <Button type="text" shape="circle" size="small">
                <InfoCircleOutlined />
              </Button>
            </Popover>
          ) : null}
        </Flex>
        <Typography.Text className="timeperiod-data-additional">
          {subtitle}
        </Typography.Text>
      </Space>
      <Divider />
      <Typography.Text
        italic
        className="timeperiod-period"
        style={{ fontSize: isSmall ? 13 : 14 }}
      >
        {period}
      </Typography.Text>
    </Space>
  );
};
