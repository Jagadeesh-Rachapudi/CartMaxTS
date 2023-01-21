import React from "react";

import Nav3, { IProps as Nav3Props } from "../Components/Nav3/Nav3";
import Nav3Data from "../Components/Nav3/Nav3.json";

import Hedder5, { IProps as Hedder5Props } from "../Components/Hedder5/Hedder5";
import Hedder5Data from "../Components/Hedder5/Hedder5.json";

import Coat, { IProps as CoatProps } from "../Components/Coat/Coat";
import CoatData from "../Components/Coat/Coat.json";

import ViewAll, { IProps as ViewAllProps } from "../Components/ViewAll/ViewAll";
import ViewAllData from "../Components/ViewAll/ViewAll.json";

function HomeFashionsViewAll() {
  return (
    <div>
      <Nav3 {...(Nav3Data as Nav3Props)} />
      <Hedder5
        {...(Hedder5Data as Hedder5Props)}
        title="ProductDetail"
        option1="Home"
        option2="Shop"
        option3="Shop List"
        color="#4F4F4F"
      />
      <Coat {...(CoatData as CoatProps)} />
      <ViewAll {...(ViewAllData as ViewAllProps)} />
    </div>
  );
}

export default HomeFashionsViewAll;
