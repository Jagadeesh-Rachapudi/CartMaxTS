import React from "react";

import Nav7, { IProps as Nav7Props } from "../Components/Nav7/Nav7";
import Nav7Data from "../Components/Nav7/Nav7.json";

function Electronics() {
  return (
    <div>
      <Nav7 {...(Nav7Data as Nav7Props)} />
    </div>
  );
}

export default Electronics;
