import React from "react";

import Nav3, { IProps as Nav3Props } from "../Components/Nav3/Nav3";
import Nav3Data from "../Components/Nav3/Nav3.json";

import Hedder5, { IProps as Hedder5Props } from "../Components/Hedder5/Hedder5";
import Hedder5Data from "../Components/Hedder5/Hedder5.json";

import Hyperion, {
  IProps as HyperionProps,
} from "../Components/Hyperion/Hyperion";
import HyperionData from "../Components/Hyperion/Hyperion.json";

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
    </div>
  );
}

export default HomeFashionsPDP;
