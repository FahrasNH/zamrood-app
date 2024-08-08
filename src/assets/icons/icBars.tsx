import * as React from "react";

const SVGComponent = (props: any) => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={48}
      height={48}
      rx={24}
      stroke="#0B7373"
      strokeWidth={2}
    />
    <path
      d="M12.9648 15.9624H36.9648"
      stroke="#0B7373"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 25H37"
      stroke="#0B7373"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9648 33.9624H36.9648"
      stroke="#0B7373"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SVGComponent;
