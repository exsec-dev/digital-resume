import { ReactNode, SVGProps } from "react";

export const createIcon = (path: ReactNode, viewBox = "0 0 24 24") => {
  const IconComponent = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox={viewBox}
      focusable="false"
      aria-hidden="true"
      className={["icon", className].filter(Boolean).join(" ")}
      {...props}
    >
      {path}
    </svg>
  );

  return IconComponent;
};
