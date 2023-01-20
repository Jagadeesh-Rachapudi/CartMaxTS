import React from "react";

import Nav8, { IProps as Nav8Props } from "../Components/Nav8/Nav8";
import Nav8Data from "../Components/Nav8/Nav8.json";

function WatchDark() {
  return (
    <div>
      <Nav8 {...(Nav8Data as Nav8Props)} />
    </div>
  );
}

export default WatchDark;
