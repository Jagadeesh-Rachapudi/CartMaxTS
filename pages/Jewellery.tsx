import React from "react";
import Hedder4, { IProps as Hedder4Props } from "../Components/Hedder4/Hedder4";
import Hedder4Data from "../Components/Hedder4/Hedder4.json";
import Navbar, { IProps as NavbarProps } from "../Components/Navbar/Navbar";
import NavbarData from "../Components/Navbar/Navbar.json";

function Jewellery() {
  return (
    <div>
      <Navbar {...(NavbarData as NavbarProps)} />
      <Hedder4 {...(Hedder4Data as Hedder4Props)} />
    </div>
  );
}

export default Jewellery;
