import "./index.scss";

const SLOGAN = "quality-focused web development";

export const RunningLine = () => {
  const renderLines = (groupIndex: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <span key={`${groupIndex}-${index}`} className="line">
        {SLOGAN}
      </span>
    ));

  return (
    <div className="running-container" aria-hidden="true">
      <div className="running-track">
        {Array.from({ length: 5 }, (_, groupIndex) => (
          <div key={groupIndex} className="running-group">
            {renderLines(groupIndex)}
          </div>
        ))}
      </div>
    </div>
  );
};
