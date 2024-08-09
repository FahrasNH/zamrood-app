import * as React from "react";

const SVGComponent = (props: any) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 16.013L15.8333 5.17969M15.8333 5.17969V15.5797M15.8333 5.17969H5.43333"
      stroke="#FAF9F5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SVGComponent;
