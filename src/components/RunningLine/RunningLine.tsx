import { Typography } from "antd";
import "./index.scss";

export const RunningLine = () => {
  return (
    <div className="running-container">
      {Array.from({ length: 5 }).map((_, index) => (
        <Typography.Title
          key={index}
          level={2}
          className="line"
          aria-hidden="true"
        >
          from concept to code
        </Typography.Title>
      ))}
    </div>
  );
};
