import React from "react";

import Nav6, { IProps as Nav6Props } from "../Components/Nav6/Nav6";
import Nav6Data from "../Components/Nav6/Nav6.json";

import Hedder7, { IProps as Hedder7Props } from "../Components/Hedder7/Hedder7";
import Hedder7Data from "../Components/Hedder7/Hedder7.json";

function WatchDark() {
  return (
    <div>
      <Nav6 {...(Nav6Data as Nav6Props)} />
      <Hedder7 {...(Hedder7Data as Hedder7Props)} />
    </div>
  );
}

export default WatchDark;
