import React from "react";

export interface IProps {
  timmer: {
    tag: string;
    title: string;
    content: string;
    days: string;
    hours: string;
    mins: string;
    sec: string;
    button: string;
  };
  cards: {
    count: string;
    products: string[];
  };
}

function YearBest(props: IProps) {
  return <div className="YearBest-Body" >YearBest</div>;
}

export default YearBest;
