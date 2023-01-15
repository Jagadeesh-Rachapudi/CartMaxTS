import React from "react";

import Antique, { IProps as AntiqueProps } from "../Components/Antique/Antique";
import AntiqueData from "../Components/Antique/Antique.json";

import Categories3, {
  IProps as Categories3Props,
} from "../Components/Categories3/Categories3";
import Categories3Data from "../Components/Categories3/Categories3.json";

import Daimond, { IProps as DaimondProps } from "../Components/Daimond/Daimond";
import DaimondData from "../Components/Daimond/Daimond.json";

import Hedder4, { IProps as Hedder4Props } from "../Components/Hedder4/Hedder4";
import Hedder4Data from "../Components/Hedder4/Hedder4.json";

import Navbar, { IProps as NavbarProps } from "../Components/Navbar/Navbar";
import NavbarData from "../Components/Navbar/Navbar.json";

import Popular2, {
  IProps as Popular2Props,
} from "../Components/Popular2/Popular2";
import Popular2Data from "../Components/Popular2/Popular2.json";

import TopSelling, {
  IProps as TopSellingProps,
} from "../Components/TopSelling/TopSelling";
import TopSellingData from "../Components/TopSelling/TopSelling.json";

function Jewellery() {
  return (
    <div>
      <Navbar {...(NavbarData as NavbarProps)} />
      <Hedder4 {...(Hedder4Data as Hedder4Props)} />
      <Popular2 {...(Popular2Data as Popular2Props)} />
      <Antique {...(AntiqueData as AntiqueProps)} />
      <Daimond {...(DaimondData as DaimondProps)} />
      <Categories3 {...(Categories3Data as Categories3Props)} />
      <TopSelling {...(TopSellingData as TopSellingProps)} />
    </div>
  );
}

export default Jewellery;
