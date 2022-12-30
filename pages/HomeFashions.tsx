import React from "react";

import Behind, { IProps as BehindProps } from "../Components/Behind/Behind";
import BehindData from "../Components/Behind/Behind.json";

import BestSales, {
  IProps as BestSalesProps,
} from "../Components/BestSales/BestSales";
import BestSalesData from "../Components/BestSales/BestSales.json";

import Mini, { IProps as MiniProps } from "../Components/Mini/Mini";
import MiniData from "../Components/Mini/Mini.json";

import Nav3, { IProps as Nav3Props } from "../Components/Nav3/Nav3";
import Nav3Data from "../Components/Nav3/Nav3.json";

import SlideShow2, {
  IProps as SlideShow2Props,
} from "../Components/SlideShow2/SlideShow2";
import SlideShow2Data from "../Components/SlideShow2/SlideShow2.json";

function HomeFashions() {
  return (
    <div>
      <Nav3 {...(Nav3Data as Nav3Props)} />
      <SlideShow2 {...(SlideShow2Data as SlideShow2Props)} />
      <Behind {...(BehindData as BehindProps)} />
      <BestSales {...(BestSalesData as BestSalesProps)} />
      <Mini {...(MiniData as MiniProps)} />
    </div>
  );
}

export default HomeFashions;
