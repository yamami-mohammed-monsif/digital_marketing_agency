import React from "react";

interface ArrowIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export const ArrowHorizontal: React.FC<ArrowIconProps> = ({
  className = "",
  width = "100%",
  height = 27,
  color = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 379 27"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M365 25.291L376.791 13.5003L365 1.70957"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1.31134e-07"
        y1="13.2095"
        x2="377"
        y2="13.2095"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  );
};

export const ArrowVertical: React.FC<ArrowIconProps> = ({
  className = "",
  width = 28,
  height = 132,
  color = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 132"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2.41852 118L14.2092 129.791L26 118"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="14.5"
        y1="-6.55671e-08"
        x2="14.5"
        y2="130"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  );
};
