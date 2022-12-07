import React from "react";
import Nav1, { IProps as Nav1Props } from "../Components/Nav1/Nav1";
import Nav1data from "../Components/Nav1/Nav1data.json";

function furniture() {
  return <Nav1 {...(Nav1data as Nav1Props)} />;
}

export default furniture;
