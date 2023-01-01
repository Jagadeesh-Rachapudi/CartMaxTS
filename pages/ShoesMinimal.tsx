import React from "react";

import BlackWhite3, {
  IProps as BlackWhite3Props,
} from "../Components/BlackWhite3/BlackWhite3";
import BlackWhite3Data from "../Components/BlackWhite3/BlackWhite3.json";

import Nav4, { IProps as Nav4Props } from "../Components/Nav4/Nav4";
import Nav4Data from "../Components/Nav4/Nav4.json";

function ShoesMinimal() {
  return (
    <div>
      <div className="Nav4">
        <Nav4 {...(Nav4Data as Nav4Props)} />
        <BlackWhite3 {...(BlackWhite3Data as BlackWhite3Props)} />
      </div>
    </div>
  );
}

export default ShoesMinimal;
