import React from "react";

import Best, { IProps as BestProps } from "../Components/Best/Best";
import BestData from "../Components/Best/Best.json";

import Footer7, { IProps as Footer7Props } from "../Components/Footer7/Footer7";
import Footer7Data from "../Components/Footer7/Footer7.json";

import HandPick, {
  IProps as HandPickProps,
} from "../Components/HandPick/HandPick";
import HandPickData from "../Components/HandPick/HandPick.json";

import Hedder6, { IProps as Hedder6Props } from "../Components/Hedder6/Hedder6";
import Hedder6Data from "../Components/Hedder6/Hedder6.json";

import Latest, { IProps as LatestProps } from "../Components/Latest/Latest";
import LatestData from "../Components/Latest/Latest.json";

import Nav7, { IProps as Nav7Props } from "../Components/Nav7/Nav7";
import Nav7Data from "../Components/Nav7/Nav7.json";

import Sellers, { IProps as SellersProps } from "../Components/Sellers/Sellers";
import SellersData from "../Components/Sellers/Sellers.json";

import SmartPhone, {
  IProps as SmartPhoneProps,
} from "../Components/SmartPhone/SmartPhone";
import SmartPhoneData from "../Components/SmartPhone/SmartPhone.json";

import Tablet, { IProps as TabletProps } from "../Components/Tablet/Tablet";
import TabletData from "../Components/Tablet/Tablet.json";

import Timmer, { IProps as TimmerProps } from "../Components/Timmer/Timmer";
import TimmerData from "../Components/Timmer/Timmer.json";

import Top, { IProps as TopProps } from "../Components/Top/Top";
import TopData from "../Components/Top/Top.json";

function Electronics() {
  return (
    <div>
      <Nav7 {...(Nav7Data as Nav7Props)} />
      <div id="home3">
        <Hedder6 {...(Hedder6Data as Hedder6Props)} />
      </div>
      <div id="Features">
        <Best {...(BestData as BestProps)} />
      </div>
      <SmartPhone {...(SmartPhoneData as SmartPhoneProps)} />
      <div id="AboutUS">
        <Timmer {...(TimmerData as TimmerProps)} />
      </div>
      <Latest {...(LatestData as LatestProps)} />
      <div id="Pages">
        <Top {...(TopData as TopProps)} />
      </div>
      <Sellers {...(SellersData as SellersProps)} />
      <div id="Blog">
        <Tablet {...(TabletData as TabletProps)} />
      </div>
      <HandPick {...(HandPickData as HandPickProps)} />
      <div id="ContactUs">
        <Footer7 {...(Footer7Data as Footer7Props)} />
      </div>
    </div>
  );
}

export default Electronics;
