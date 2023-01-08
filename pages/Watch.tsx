import React from "react";

import Arrivals, {
  IProps as ArrivalsProps,
} from "../Components/Arrivals/Arrivals";
import ArrivalsData from "../Components/Arrivals/Arrivals.json";

import Hedder3, { IProps as Hedder3Props } from "../Components/Hedder3/Hedder3";
import Hedder3Data from "../Components/Hedder3/Hedder3.json";

import Nav6, { IProps as Nav6Props } from "../Components/Nav6/Nav6";
import Nav6Data from "../Components/Nav6/Nav6.json";

function Watch() {
  return (
    <div>
      <Nav6 {...(Nav6Data as Nav6Props)} />
      <Hedder3 {...(Hedder3Data as Hedder3Props)} />
      <Arrivals {...(ArrivalsData as ArrivalsProps)} />
    </div>
  );
}

export default Watch;
