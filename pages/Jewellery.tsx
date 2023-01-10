import React from "react";
import Navbar, { IProps as NavbarProps } from "../Components/Navbar/Navbar";
import NavbarData from "../Components/Navbar/Navbar.json";

function Jewellery() {
  return (
    <div>
      <Navbar {...(NavbarData as NavbarProps)} />
    </div>
  );
}

export default Jewellery;
