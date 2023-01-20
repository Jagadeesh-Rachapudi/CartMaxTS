import React from "react";

import Arrivals2, {
  IProps as Arrivals2Props,
} from "../Components/Arrivals2/Arrivals2";
import Arrivals2Data from "../Components/Arrivals2/Arrivals2.json";

import Nav6, { IProps as Nav6Props } from "../Components/Nav6/Nav6";
import Nav6Data from "../Components/Nav6/Nav6.json";

import Hedder7, { IProps as Hedder7Props } from "../Components/Hedder7/Hedder7";
import Hedder7Data from "../Components/Hedder7/Hedder7.json";

function WatchDark() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Nav6 {...(Nav6Data as Nav6Props)} />
      <Hedder7 {...(Hedder7Data as Hedder7Props)} />
      <Arrivals2 {...(Arrivals2Data as Arrivals2Props)} />
    </div>
  );
}

export default WatchDark;
