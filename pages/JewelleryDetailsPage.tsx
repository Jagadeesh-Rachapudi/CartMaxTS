import React from "react";

import Navbar, { IProps as NavbarProps } from "../Components/Navbar/Navbar";
import NavbarData from "../Components/Navbar/Navbar.json";

import Footer6, { IProps as Footer6Props } from "../Components/Footer6/Footer6";
import Footer6Data from "../Components/Footer6/Footer6.json";

import Hedder5, { IProps as Hedder5Props } from "../Components/Hedder5/Hedder5";
import Hedder5Data from "../Components/Hedder5/Hedder5.json";

import Details, { IProps as DetailsProps } from "../Components/Details/Details";
import DetailsData from "../Components/Details/Details.json";

import TabsInDetails, {
  IProps as TabsInDetailsProps,
} from "../Components/TabsInDetails/TabsInDetails";
import TabsInDetailsData from "../Components/TabsInDetails/TabsInDetails.json";

import Products, {
  IProps as ProductsProps,
} from "../Components/Products/Products";
import ProductsData from "../Components/Products/Products.json";

function JewelleryDetailsPage() {
  return (
    <div>
      <Navbar {...(NavbarData as NavbarProps)} />
      <Hedder5
        {...(Hedder5Data as Hedder5Props)}
        title="ProductDetail"
        option1="Home"
        option2="Shop"
        option3="Shop List"
        color="#212121"
      />
      <Details {...(DetailsData as DetailsProps)} />
      <TabsInDetails {...(TabsInDetailsData as TabsInDetailsProps)} />
      <Products {...(ProductsData as ProductsProps)} />
      <Footer6 {...(Footer6Data as Footer6Props)} />
    </div>
  );
}

export default JewelleryDetailsPage;
