import React from "react";

import Nav3, { IProps as Nav3Props } from "../Components/Nav3/Nav3";
import Nav3Data from "../Components/Nav3/Nav3.json";

import Hedder5, { IProps as Hedder5Props } from "../Components/Hedder5/Hedder5";
import Hedder5Data from "../Components/Hedder5/Hedder5.json";

import Hyperion, {
  IProps as HyperionProps,
} from "../Components/Hyperion/Hyperion";
import HyperionData from "../Components/Hyperion/Hyperion.json";

import Cute, { IProps as CuteProps } from "../Components/Cute/Cute";
import CuteData from "../Components/Cute/Cute.json";

import Dark, { IProps as DarkProps } from "../Components/Dark/Dark";
import DarkData from "../Components/Dark/Dark.json";

import Related, { IProps as RelatedProps } from "../Components/Related/Related";
import RelatedData from "../Components/Related/Related.json";

import Footer3, { IProps as Footer3Props } from "../Components/Footer3/Footer3";
import Footer3Data from "../Components/Footer3/Footer3.json";

function HomeFashionsPDP() {
  return (
    <div>
      <Nav3 {...(Nav3Data as Nav3Props)} />
      <Hedder5
        {...(Hedder5Data as Hedder5Props)}
        title="Shop Page"
        option1="Home"
        option2="Shop"
        option3="Shop List"
        color="black"
      />
      <Hyperion {...(HyperionData as HyperionProps)} />
      <Cute {...(CuteData as CuteProps)} />
      <Dark {...(DarkData as DarkProps)} />
      <Related {...(RelatedData as RelatedProps)} />
      <Footer3 {...(Footer3Data as Footer3Props)} />
    </div>
  );
}

export default HomeFashionsPDP;
