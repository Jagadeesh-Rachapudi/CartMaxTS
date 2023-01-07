import React from "react";

import Nav6, { IProps as Nav6Props } from "../Components/Nav6/Nav6";
import Nav6Data from "../Components/Nav6/Nav6.json";

function Watch() {
  return (
    <div>
      <Nav6 {...(Nav6Data as Nav6Props)} />
    </div>
  );
}

export default Watch;
