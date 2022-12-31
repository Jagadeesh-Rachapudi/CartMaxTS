import React from "react";

import Amazon, { IProps as AmazonProps } from "../Components/Amazon/Amazon";
import AmazonData from "../Components/Amazon/Amazon.json";

import Behind, { IProps as BehindProps } from "../Components/Behind/Behind";
import BehindData from "../Components/Behind/Behind.json";

import BestSales, {
  IProps as BestSalesProps,
} from "../Components/BestSales/BestSales";
import BestSalesData from "../Components/BestSales/BestSales.json";

import Cards, { IProps as CardsProps } from "../Components/Cards/Cards";
import CardsData from "../Components/Cards/Cards.json";

import Footer3, { IProps as Footer3Props } from "../Components/Footer3/Footer3";
import Footer3Data from "../Components/Footer3/Footer3.json";

import Insta, { IProps as InstaProps } from "../Components/Insta/Insta";
import InstaData from "../Components/Insta/Insta.json";

import Mini, { IProps as MiniProps } from "../Components/Mini/Mini";
import MiniData from "../Components/Mini/Mini.json";

import Month, { IProps as MonthProps } from "../Components/Month/Month";
import MonthData from "../Components/Month/Month.json";

import Nav3, { IProps as Nav3Props } from "../Components/Nav3/Nav3";
import Nav3Data from "../Components/Nav3/Nav3.json";

import News2, { IProps as News2Props } from "../Components/News2/News2";
import News2Data from "../Components/News2/News2.json";

import SlideShow2, {
  IProps as SlideShow2Props,
} from "../Components/SlideShow2/SlideShow2";
import SlideShow2Data from "../Components/SlideShow2/SlideShow2.json";

import Timmer2, { IProps as Timmer2Props } from "../Components/Timmer2/Timmer2";
import Timmer2Data from "../Components/Timmer2/Timmer2.json";

function HomeFashions() {
  return (
    <div>
      <Nav3 {...(Nav3Data as Nav3Props)} />
      <SlideShow2 {...(SlideShow2Data as SlideShow2Props)} />
      <Behind {...(BehindData as BehindProps)} />
      <BestSales {...(BestSalesData as BestSalesProps)} />
      <Mini {...(MiniData as MiniProps)} />
      <Month {...(MonthData as MonthProps)} />
      <Amazon {...(AmazonData as AmazonProps)} />
      <Cards {...(CardsData as CardsProps)} />
      <Timmer2 {...(Timmer2Data as Timmer2Props)} />
      <News2 {...(News2Data as News2Props)} />
      <Insta {...(InstaData as InstaProps)} />
      <Footer3 {...(Footer3Data as Footer3Props)} />
    </div>
  );
}
``;
export default HomeFashions;
