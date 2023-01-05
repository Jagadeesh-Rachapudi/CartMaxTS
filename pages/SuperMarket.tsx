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
        <Nav5 {...(Nav5Data as Nav5Props)} />
        <Hedder2 {...(Hedder2Data as Hedder2Props)} />
        <Featured {...(FeaturedData as FeaturedProps)} />
        <Popular {...(PopularData as PopularProps)} />
        <Categories2 {...(Categories2Data as Categories2Props)} />
        <Offers {...(OffersData as OffersProps)} />
        <Smart {...(SmartData as SmartProps)} />
        <Timmer3 {...(Timmer3Data as Timmer3Props)} />
        <BestSellers {...(BestSellersData as BestSellersProps)} />
      </div>
    </div>
  );
}

export default SuperMarket;
