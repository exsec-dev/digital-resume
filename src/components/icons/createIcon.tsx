import { ReactNode, SVGProps } from "react";
import clsx from "clsx";

export const createIcon = (path: ReactNode, viewBox = "0 0 24 24") => {
  const IconComponent = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox={viewBox}
      focusable="false"
      aria-hidden="true"
      className={clsx("icon", className)}
      {...props}
    >
      {path}
    </svg>
  );

  return IconComponent;
};
