import { Typography } from "antd";

export const RunningLine = () => {
  return (
    <div className="running-container">
      {Array.from({ length: 5 }).map((_, index) => (
        <Typography.Title key={index} level={2} className="line">
          from concept to code
        </Typography.Title>
      ))}
    </div>
  );
};
