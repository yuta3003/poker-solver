import React, { type ReactElement, type MouseEvent } from "react";
import { BeatLoader } from "react-spinners";

interface ButtonProps {
  variant?: "default" | "primary" | "warning";
  size?: "md" | "lg";
  className?: string;
  block?: boolean;
  isLoading?: boolean;
  icon?: ReactElement;
  type?: "button" | "submit" | "reset";
  children: ReactElement | string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function getColor(variant: string): string {
  switch (variant) {
    case "primary":
    case "warning":
      return "#fff";
    default:
      return "rgba(0,0,0,0.65)";
  }
}

function Button(props: ButtonProps): React.ReactElement {
  const {
    isLoading = false,
    variant = "default",
    children,
    icon = null,
  } = props;
  return (
    <button>
      {isLoading ? (
        <BeatLoader color={getColor(variant)} margin={0} size={12} />
      ) : (
        <React.Fragment>
          {icon}
          {children}
        </React.Fragment>
      )}
    </button>
  );
}

export default Button;
