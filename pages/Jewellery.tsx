import React from "react";

import Antique, { IProps as AntiqueProps } from "../Components/Antique/Antique";
import AntiqueData from "../Components/Antique/Antique.json";

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

function Jewellery() {
  return (
    <div>
      <Navbar {...(NavbarData as NavbarProps)} />
      <Hedder4 {...(Hedder4Data as Hedder4Props)} />
      <Popular2 {...(Popular2Data as Popular2Props)} />
      <Antique {...(AntiqueData as AntiqueProps)} />
      <Daimond {...(DaimondData as DaimondProps)} />
    </div>
  );
}

export default Jewellery;
