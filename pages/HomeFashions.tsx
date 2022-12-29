import React from "react";
import Nav3, { IProps as Nav3Props } from "../Components/Nav3/Nav3";
import Nav3Data from "../Components/Nav3/Nav3.json";

function HomeFashions() {
  return (
    <div>
      <Nav3 {...(Nav3Data as Nav3Props)} />
    </div>
  );
}

export default HomeFashions;
