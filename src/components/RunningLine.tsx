import React from "react";
import { Typography } from "antd";

export const RunningLine = () => {
  return (
    <div className="running-container" id="contact">
      {Array.from({ length: 5 }).map((_, index) => (
        <Typography.Title key={index} level={1} className="line">
          from concept to code
        </Typography.Title>
      ))}
    </div>
  );
};
