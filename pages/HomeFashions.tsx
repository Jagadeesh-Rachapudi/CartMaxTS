import React from "react";
import Nav3, { IProps as Nav3Props } from "../Components/Nav3/Nav3";
import Nav3Data from "../Components/Nav3/Nav3.json";

import SlideSmhow2, {
  IProps as SlideSmhow2Props,
} from "../Components/SlideShow2/SlideSmhow2";
import SlideSmhow2Data from "../Components/SlideShow2/SlideSmhow2.json";

function HomeFashions() {
  return (
    <div>
      <Nav3 {...(Nav3Data as Nav3Props)} />
      <SlideSmhow2 {...(SlideSmhow2Data as SlideSmhow2Props)} />
    </div>
  );
}

export default HomeFashions;
