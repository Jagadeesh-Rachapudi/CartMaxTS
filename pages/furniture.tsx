import React from "react";

import Card1, { IProps as Card1props } from "../Components/Card1/Card1";
import Card1data from "../Components/Card1/Card1data.json";

import Hedder1, { IProps as Hedder1props } from "../Components/Hedder1/Hedder1";
import Hedder1Data from "../Components/Hedder1/Hedder1Data.json";

import Nav1, { IProps as Nav1Props } from "../Components/Nav1/Nav1";
import Nav1data from "../Components/Nav1/Nav1data.json";

function furniture() {
  return (
    <div>
      <Nav1 {...(Nav1data as Nav1Props)} />
      <Hedder1 {...(Hedder1Data as Hedder1props)} />
      <Card1 {...(Card1data as Card1props)} />
    </div>
  );
}

export default furniture;
