/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsBag } from "react-icons/bs";

export interface IProps {
  Cardtag: string;
  Cardtitle: string;
  price: string;
  src: string;
  prodid: number;
}

function GoldCard(props: IProps) {
  return (
    <div className="GoldCard-Body">
      <img src={props.src} alt="" className="img" />
      <div
        className="GoldCard-tag mt-1"
        dangerouslySetInnerHTML={{
          __html: props.Cardtag,
        }}
      />
      <div
        className="GoldCard-title mt-2"
        dangerouslySetInnerHTML={{
          __html: props.Cardtitle,
        }}
      />
      <div
        className="price mt-2 mb-2"
        dangerouslySetInnerHTML={{
          __html: props.price,
        }}
      />
      <div className="Cart">
        <BsBag color="white" className="icon" />
      </div>
    </div>
  );
}

export default GoldCard;
