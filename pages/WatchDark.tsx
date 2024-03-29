import React from "react";

import Arrivals2, {
  IProps as Arrivals2Props,
} from "../Components/Arrivals2/Arrivals2";
import Arrivals2Data from "../Components/Arrivals2/Arrivals2.json";

import Nav6, { IProps as Nav6Props } from "../Components/Nav6/Nav6";
import Nav6Data from "../Components/Nav6/Nav6.json";

import Hedder7, { IProps as Hedder7Props } from "../Components/Hedder7/Hedder7";
import Hedder7Data from "../Components/Hedder7/Hedder7.json";

import Collection3, {
  IProps as Collection3Props,
} from "../Components/Collection3/Collection3";
import Collection3Data from "../Components/Collection3/Collection3.json";

import TwoParts2, {
  IProps as TwoParts2Props,
} from "../Components/TwoParts2/TwoParts2";
import TwoParts2Data from "../Components/TwoParts2/TwoParts2.json";

import DarkCollection, {
  IProps as DarkCollectionProps,
} from "../Components/DarkCollection/DarkCollection";
import DarkCollectionData from "../Components/DarkCollection/DarkCollection.json";

import Footer5, { IProps as Footer5Props } from "../Components/Footer5/Footer5";
import Footer5Data from "../Components/Footer5/Footer5.json";

function WatchDark() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Nav6 {...(Nav6Data as Nav6Props)} />
      <Hedder7 {...(Hedder7Data as Hedder7Props)} />
      <Arrivals2 {...(Arrivals2Data as Arrivals2Props)} />
      <Collection3 {...(Collection3Data as Collection3Props)} />
      <TwoParts2 {...(TwoParts2Data as TwoParts2Props)} />
      <DarkCollection {...(DarkCollectionData as DarkCollectionProps)} />
      <Footer5 {...(Footer5Data as Footer5Props)} />
    </div>
  );
}

export default WatchDark;
