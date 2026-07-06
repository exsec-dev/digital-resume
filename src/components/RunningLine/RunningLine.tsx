import "./index.scss";

const SLOGAN = "quality-focused web development";
const LINES_PER_GROUP = 5;

const lines = Array.from({ length: LINES_PER_GROUP }, (_, index) => (
  <span key={index} className="line">
    {SLOGAN}
  </span>
));

export const RunningLine = () => (
  <div className="running-container" aria-hidden="true">
    <div className="running-track">
      {/* the second copy makes the -50% keyframe loop seamless */}
      <div className="running-group">{lines}</div>
      <div className="running-group">{lines}</div>
    </div>
  </div>
);
