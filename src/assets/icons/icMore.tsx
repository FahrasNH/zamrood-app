import * as React from "react";

const SVGComponent = (props: any) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 44 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.5}
      y={1.26001}
      width={43}
      height={43}
      rx={21.5}
      stroke="#004040"
    />
    <path
      d="M18.4697 14.9797C18.1768 15.2726 18.1768 15.7474 18.4697 16.0403L25.1893 22.76L18.4697 29.4797C18.1768 29.7726 18.1768 30.2474 18.4697 30.5403C18.7626 30.8332 19.2374 30.8332 19.5303 30.5403L26.7803 23.2903C27.0732 22.9974 27.0732 22.5226 26.7803 22.2297L19.5303 14.9797C19.2374 14.6868 18.7626 14.6868 18.4697 14.9797Z"
      fill="#004040"
    />
  </svg>
);

export default SVGComponent;
