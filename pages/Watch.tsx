import React from "react";

import Arrivals, {
  IProps as ArrivalsProps,
} from "../Components/Arrivals/Arrivals";
import ArrivalsData from "../Components/Arrivals/Arrivals.json";

import Collection, {
  IProps as CollectionProps,
} from "../Components/Collection/Collection";
import CollectionData from "../Components/Collection/Collection.json";

import Hedder3, { IProps as Hedder3Props } from "../Components/Hedder3/Hedder3";
import Hedder3Data from "../Components/Hedder3/Hedder3.json";

import Nav6, { IProps as Nav6Props } from "../Components/Nav6/Nav6";
import Nav6Data from "../Components/Nav6/Nav6.json";

import TwoParts, {
  IProps as TwoPart2props,
} from "../Components/TwoParts/TwoParts";
import TwoPart2Data from "../Components/TwoParts/TwoParts.json";

function Watch() {
  return (
    <div>
      <Nav6 {...(Nav6Data as Nav6Props)} />
      <Hedder3 {...(Hedder3Data as Hedder3Props)} />
      <Arrivals {...(ArrivalsData as ArrivalsProps)} />
      <Collection {...(CollectionData as CollectionProps)} />
      <TwoParts {...(TwoPart2Data as TwoPart2props)} />
    </div>
  );
}

export default Watch;
