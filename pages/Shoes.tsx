import React from "react";

import Categories, {
  IProps as CategoriesProps,
} from "../Components/Categories/Categories";

import CategoriesData from "../Components/Categories/Categories.json";

import ItemsListing, {
  IProps as ItemsListingProps,
} from "../Components/ItemsListing/ItemsListing";
import ItemsListingData from "../Components/ItemsListing/ItemsListing.json";

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
      <SlideShow1 {...(SlideShow1Data as unknown as SlideShow1Props)} />
      <Categories {...(CategoriesData as CategoriesProps)} />
      <ItemsListing {...(ItemsListingData as ItemsListingProps)} />
    </div>
  );
}

export default Shoes;
