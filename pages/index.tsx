import React from "react";

import Card1, { IProps as Card1props } from "../Components/Card1/Card1";
import Card1data from "../Components/Card1/Card1data.json";

import Hedder1, { IProps as Hedder1props } from "../Components/Hedder1/Hedder1";
import Hedder1Data from "../Components/Hedder1/Hedder1Data.json";

import Living, { IProps as Livingprops } from "../Components/Living/Living";
import LivingData from "../Components/Living/LivingData.json";

import Nav1, { IProps as Nav1Props } from "../Components/Nav1/Nav1";
import Nav1data from "../Components/Nav1/Nav1data.json";

import VerticalCards, {
  IProps as vertcialCardsProps,
} from "../Components/VerticalCards/VerticalCards";
import VerticalCardsData from "../Components/VerticalCards/VerticalCards.json";

import YourItems, {
  IProps as YourItemsProps,
} from "../Components/YourItems/YourItems";

import YourItemsData from "../Components/YourItems/YourItems.json";

import Timmer1, { IProps as Timmer1Props } from "../Components/Timmer1/Timmer1";
import Timmer1Data from "../Components/Timmer1/Timmer1.json";

import YearBest, {
  IProps as YearBest1Props,
} from "../Components/YearBest/YearBest";
import YearBestData from "../Components/YearBest/YearBest.json";

import Stars, { IProps as StartProps } from "../Components/Stars/Stars";
import StarsData from "../Components/Stars/Stars.json";

import News, { IProps as NewsProps } from "../Components/News/News";
import NewsData from "../Components/News/News.json";

import BlackWhite, {
  IProps as BlackWhiteProps,
} from "../Components/BlackWhite/BlackWhite";
import BlackWhiteData from "../Components/BlackWhite/BlackWhite.json";

import Footer1, { IProps as Footer1Props } from "../Components/Footer1/Footer1";
import Footer1Data from "../Components/Footer1/Footer1.json";
export default function Home() {
  return (
    <div>
      <div>
        <Nav1 {...(Nav1data as Nav1Props)} />
        <Hedder1 {...(Hedder1Data as Hedder1props)} />
        <Card1 {...(Card1data as Card1props)} />
        <Living {...(LivingData as Livingprops)} />
        <VerticalCards {...(VerticalCardsData as vertcialCardsProps)} />
        <YourItems {...(YourItemsData as YourItemsProps)} />
        <Timmer1 {...(Timmer1Data as Timmer1Props)} />
        <YearBest {...(YearBestData as YearBest1Props)} />
        <Stars {...(StarsData as StartProps)} />
        <News {...(NewsData as NewsProps)} />
        <BlackWhite {...(BlackWhiteData as BlackWhiteProps)} />
        <Footer1 {...(Footer1Data as Footer1Props)} />
      </div>
    </div>
  );
}
