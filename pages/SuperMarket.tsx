import React from "react";

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

import Popular, { IProps as PopularProps } from "../Components/Popular/Popular";
import PopularData from "../Components/Popular/Popular.json";

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
      </div>
    </div>
  );
}

export default SuperMarket;
