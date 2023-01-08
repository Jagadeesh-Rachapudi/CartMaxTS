import React from "react";

import Arrivals, {
  IProps as ArrivalsProps,
} from "../Components/Arrivals/Arrivals";
import ArrivalsData from "../Components/Arrivals/Arrivals.json";

import Black, { IProps as BlackProps } from "../Components/Black/Black";
import BlackData from "../Components/Black/Black.json";

import Collection, {
  IProps as CollectionProps,
} from "../Components/Collection/Collection";
import CollectionData from "../Components/Collection/Collection.json";

import Collection2, {
  IProps as Collection2Props,
} from "../Components/Collection2/Collection2";
import Collection2Data from "../Components/Collection2/Collection2.json";

import Edition, { IProps as EditionProps } from "../Components/Edition/Edition";
import EditionData from "../Components/Edition/Edition.json";

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
      <Edition {...(EditionData as EditionProps)} />
      <Black {...(BlackData as BlackProps)} />
      <Collection2 {...(Collection2Data as Collection2Props)} />
    </div>
  );
}

export default Watch;
