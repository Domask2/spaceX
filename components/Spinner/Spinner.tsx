import React from "react";
import { Wrapper } from "./Spannet.style";

const Spinner = () => {
  return (
    <Wrapper>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </Wrapper>
  );
};

export default Spinner;
