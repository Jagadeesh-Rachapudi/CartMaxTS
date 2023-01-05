import React from "react";

import BestSellers, {
  IProps as BestSellersProps,
} from "../Components/BestSellers/BestSellers";
import BestSellersData from "../Components/BestSellers/BestSellers.json";

import Categories2, {
  IProps as Categories2Props,
} from "../Components/Categories2/Categories2";
import Categories2Data from "../Components/Categories2/Categories2.json";

import Featured, {
  IProps as FeaturedProps,
} from "../Components/Featured/Featured";
import FeaturedData from "../Components/Featured/Featured.json";

import Footer4, { IProps as Footer4Props } from "../Components/Footer4/Footer4";
import Footer4Data from "../Components/Footer4/Footer4.json";

import Hedder2, { IProps as Hedder2Props } from "../Components/Hedder2/Hedder2";
import Hedder2Data from "../Components/Hedder2/Hedder2.json";

import Nav5, { IProps as Nav5Props } from "../Components/Nav5/Nav5";
import Nav5Data from "../Components/Nav5/Nav5.json";

import Offers, { IProps as OffersProps } from "../Components/Offers/Offers";
import OffersData from "../Components/Offers/Offers.json";

import Popular, { IProps as PopularProps } from "../Components/Popular/Popular";
import PopularData from "../Components/Popular/Popular.json";

import Smart, { IProps as SmartProps } from "../Components/Smart/Smart";
import SmartData from "../Components/Smart/Smart.json";

import Timmer3, { IProps as Timmer3Props } from "../Components/Timmer3/Timmer3";
import Timmer3Data from "../Components/Timmer3/Timmer3.json";

import TopSearch, {
  IProps as TopSearchProps,
} from "../Components/TopSearch/TopSearch";
import TopSearchData from "../Components/TopSearch/TopSearch.json";

function SuperMarket() {
  return (
    <div>
      <div>
        <TopSearch {...(TopSearchData as TopSearchProps)} />
      </div>
      <div>
        <Nav5 {...(Nav5Data as Nav5Props)} />
      </div>
      <div id="#home4">
        <Hedder2 {...(Hedder2Data as Hedder2Props)} />
      </div>
      <div id="#Features4">
        <Featured {...(FeaturedData as FeaturedProps)} />
      </div>
      <div id="#Blog4">
        <Popular {...(PopularData as PopularProps)} />
      </div>
      <div>
        <Categories2 {...(Categories2Data as Categories2Props)} />
      </div>
      <div>
        <Offers {...(OffersData as OffersProps)} />
      </div>
      <div id="#Pages4">
        <Smart {...(SmartData as SmartProps)} />
      </div>
      <div>
        <Timmer3 {...(Timmer3Data as Timmer3Props)} />
      </div>
      <div>
        <BestSellers {...(BestSellersData as BestSellersProps)} />
      </div>
      <div id="#ContactUS4">
        <Footer4 {...(Footer4Data as Footer4Props)} />
      </div>
    </div>
  );
}

export default SuperMarket;
