import React from "react";
import Nav4, { IProps as Nav4Props } from "../Components/Nav4/Nav4";
import Nav4Data from "../Components/Nav4/Nav4.json";

function ShoesMinimal() {
  return (
    <div>
      <div className="Nav4">
        <Nav4 {...(Nav4Data as Nav4Props)} />
      </div>
    </div>
  );
}

export default ShoesMinimal;
