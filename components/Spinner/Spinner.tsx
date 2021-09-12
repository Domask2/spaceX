import React from "react";
import { Wrapper } from "./Spinner.style";

const Spinner = () => {
  return (
    <Wrapper>
        <div className="lds-dual-ring"></div>
    </Wrapper>
  );
};

export default Spinner;
