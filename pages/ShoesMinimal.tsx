import React from "react";

import BlackWhite3, {
  IProps as BlackWhite3Props,
} from "../Components/BlackWhite3/BlackWhite3";
import BlackWhite3Data from "../Components/BlackWhite3/BlackWhite3.json";

import Nav4, { IProps as Nav4Props } from "../Components/Nav4/Nav4";
import Nav4Data from "../Components/Nav4/Nav4.json";

import Footer2, { IProps as Footer2Props } from "../Components/Footer2/Footer2";
import Footer2Data from "../Components/Footer2/Footer2.json";

import BlackWhite2, {
  IProps as BlackWhite2Props,
} from "../Components/BlackWhite2/BlackWhite2";
import BlackWhite2Data from "../Components/BlackWhite2/BlackWhite2.json";

function ShoesMinimal() {
  return (
    <div>
      <div className="Nav4">
        <Nav4 {...(Nav4Data as Nav4Props)} />
        <BlackWhite3 {...(BlackWhite3Data as BlackWhite3Props)} />
        <BlackWhite2 {...(BlackWhite2Data as BlackWhite2Props)} />
        <div id="Pages3">
          <Footer2 {...(Footer2Data as Footer2Props)} />
        </div>
      </div>
    </div>
  );
}

export default ShoesMinimal;
