import React from "react";

import Big, { IProps as BigProps } from "../Components/Big/Big";
import BigData from "../Components/Big/Big.json";

import Dreams, { IProps as DreamsProps } from "../Components/Dreams/Dreams";
import DreamsData from "../Components/Dreams/Dreams.json";

import Hedder8, { IProps as Hedder8Props } from "../Components/Hedder8/Hedder8";
import Hedder8Data from "../Components/Hedder8/Hedder8.json";

import Nav8, { IProps as Nav8Props } from "../Components/Nav8/Nav8";
import Nav8Data from "../Components/Nav8/Nav8.json";

import New, { IProps as NewProps } from "../Components/New/New";
import NewData from "../Components/New/New.json";

import Play, { IProps as PlayProps } from "../Components/Play/Play";
import PlayData from "../Components/Play/Play.json";

import Reviews, { IProps as ReviewsProps } from "../Components/Reviews/Reviews";
import ReviewsData from "../Components/Reviews/Reviews.json";

import Shop, { IProps as ShopProps } from "../Components/Shop/Shop";
import ShopData from "../Components/Shop/Shop.json";

import Summer, { IProps as SummerProps } from "../Components/Summer/Summer";
import SummerData from "../Components/Summer/Summer.json";

function FashionAccesories() {
  return (
    <div>
      <Nav8 {...(Nav8Data as Nav8Props)} />
      <Hedder8 {...(Hedder8Data as Hedder8Props)} />
      <Dreams {...(DreamsData as DreamsProps)} />
      <Shop {...(ShopData as ShopProps)} />
      <New {...(NewData as NewProps)} />
      <Big {...(BigData as BigProps)} />
      <Summer {...(SummerData as SummerProps)} />
      <Play {...(PlayData as PlayProps)} />
      <Reviews {...(ReviewsData as ReviewsProps)} />
    </div>
  );
}

export default FashionAccesories;