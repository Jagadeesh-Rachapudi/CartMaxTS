import React from "react";
import Nav2, { IProps as Nav2Props } from "../Components/Nav2/Nav2";
import Nav2data from "../Components/Nav2/Nav2.json";

function Shoes() {
  return (
    <div>
      <Nav2 {...(Nav2data as Nav2Props)} />
    </div>
  );
}

export default Shoes;
