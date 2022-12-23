import React, { useState } from "react";

import Footer1, { IProps as Footer1Props } from "../Components/Footer1/Footer1";
import Footer1Data from "../Components/Footer1/Footer1.json";

import Nav1, { IProps as Nav1Props } from "../Components/Nav1/Nav1";
import Nav1data from "../Components/Nav1/Nav1data.json";

export interface IProps {
  ProductName: string;
}

var p = "";

export function PropHandler(productName: string): void {
  p = productName;
}

function SearchedProducts(props: IProps) {
  return (
    <div>
      <Nav1 {...(Nav1data as Nav1Props)} />
      <h1>No Products to Show {p}.....</h1>
      <Footer1 {...(Footer1Data as Footer1Props)} />
    </div>
  );
}

export default SearchedProducts;
