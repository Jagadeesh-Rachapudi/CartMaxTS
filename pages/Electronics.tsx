import React from "react";

import Hedder6, { IProps as Hedder6Props } from "../Components/Hedder6/Hedder6";
import Hedder6Data from "../Components/Hedder6/Hedder6.json";

import Nav7, { IProps as Nav7Props } from "../Components/Nav7/Nav7";
import Nav7Data from "../Components/Nav7/Nav7.json";

function Electronics() {
  return (
    <div>
      <Nav7 {...(Nav7Data as Nav7Props)} />
      <Hedder6 {...(Hedder6Data as Hedder6Props)} />
    </div>
  );
}

export default Electronics;
