import React from "react";

import Navbar, { IProps as NavbarProps } from "../Components/Navbar/Navbar";
import NavbarData from "../Components/Navbar/Navbar.json";

import Footer6, { IProps as Footer6Props } from "../Components/Footer6/Footer6";
import Footer6Data from "../Components/Footer6/Footer6.json";

function JewelleryDetailsPage() {
  return (
    <div>
      <Navbar {...(NavbarData as NavbarProps)} />
      <Footer6 {...(Footer6Data as Footer6Props)} />
    </div>
  );
}

export default JewelleryDetailsPage;
