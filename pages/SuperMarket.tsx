import React from "react";

import Nav5, { IProps as Nav5Props } from "../Components/Nav5/Nav5";
import Nav5Data from "../Components/Nav5/Nav5.json";

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
      </div>
    </div>
  );
}

export default SuperMarket;
