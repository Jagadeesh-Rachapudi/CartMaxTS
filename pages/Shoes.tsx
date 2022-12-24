import React from "react";
import Nav2, { IProps as Nav2Props } from "../Components/Nav2/Nav2";
import Nav2data from "../Components/Nav2/Nav2.json";

import SlideShow1, {
  IProps as SlideShow1Props,
} from "../Components/SlideShow1/SlideShow1";
import SlideShow1Data from "../Components/SlideShow1/SlideShow1.json";

function Shoes() {
  return (
    <div>
      <Nav2 {...(Nav2data as Nav2Props)} />
    </div>
  );
}

export default Shoes;
