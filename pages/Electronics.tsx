import React from "react";

import Best, { IProps as BestProps } from "../Components/Best/Best";
import BestData from "../Components/Best/Best.json";

import Hedder6, { IProps as Hedder6Props } from "../Components/Hedder6/Hedder6";
import Hedder6Data from "../Components/Hedder6/Hedder6.json";

import Nav7, { IProps as Nav7Props } from "../Components/Nav7/Nav7";
import Nav7Data from "../Components/Nav7/Nav7.json";

import SmartPhone, {
  IProps as SmartPhoneProps,
} from "../Components/SmartPhone/SmartPhone";
import SmartPhoneData from "../Components/SmartPhone/SmartPhone.json";

function Electronics() {
  return (
    <div>
      <Nav7 {...(Nav7Data as Nav7Props)} />
      <Hedder6 {...(Hedder6Data as Hedder6Props)} />
      <Best {...(BestData as BestProps)} />
      <SmartPhone {...(SmartPhoneData as SmartPhoneProps)} />
    </div>
  );
}

export default Electronics;
