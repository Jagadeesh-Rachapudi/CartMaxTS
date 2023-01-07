import React from "react";

import Hedder3, { IProps as Hedder3Props } from "../Components/Hedder3/Hedder3";
import Hedder3Data from "../Components/Hedder3/Hedder3.json";

import Nav6, { IProps as Nav6Props } from "../Components/Nav6/Nav6";
import Nav6Data from "../Components/Nav6/Nav6.json";

function Watch() {
  return (
    <div>
      <Nav6 {...(Nav6Data as Nav6Props)} />
      <Hedder3 {...(Hedder3Data as Hedder3Props)} />
    </div>
  );
}

export default Watch;
