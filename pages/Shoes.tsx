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

import Percent, { IProps as PercentProps } from "../Components/Percent/Percent";
import PercentData from "../Components/Percent/Percent.json";

import Savings, { IProps as SavingsProps } from "../Components/Savings/Savings";
import SavingsData from "../Components/Savings/Savings.json";

import SelectShoes, {
  IProps as SelectShoesProps,
} from "../Components/SelectShoes/SelectShoes";
import SelectShoesData from "../Components/SelectShoes/SelectShoes.json";

import SlideShow1, {
  IProps as SlideShow1Props,
} from "../Components/SlideShow1/SlideShow1";
import SlideShow1Data from "../Components/SlideShow1/SlideShow1.json";

import Snekers, { IProps as SnekersProps } from "../Components/Snekers/Snekers";
import SnekersData from "../Components/Snekers/Snekers.json";

import Yourself, {
  IProps as YourselfProps,
} from "../Components/Yourself/Yourself";
import YourselfData from "../Components/Yourself/Yourself.json";

function Shoes() {
  return (
    <div>
      <Nav2 {...(Nav2data as Nav2Props)} />
      <SlideShow1 {...(SlideShow1Data as unknown as SlideShow1Props)} />
      <Categories {...(CategoriesData as CategoriesProps)} />
      <ItemsListing {...(ItemsListingData as ItemsListingProps)} />
      <Snekers {...(SnekersData as SnekersProps)} />
      <Savings {...(SavingsData as SavingsProps)} />
      <Percent {...(PercentData as PercentProps)} />
      <Yourself {...(YourselfData as YourselfProps)} />
      <SelectShoes {...(SelectShoesData as SelectShoesProps)} />
    </div>
  );
}

export default Shoes;
