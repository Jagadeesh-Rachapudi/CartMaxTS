/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface IProps {
  src: string;
  title2: string;
  color1: string;
  color2: string;
  Count: string;
}

function ColorCard(props: IProps) {
  return (
    <div className="ColorCard-body" style={{ backgroundColor: props.color1 }}>
      <div className="img-Container">
        <img src={props.src} alt="" className="img" />
      </div>
      <div
        className="title2"
        dangerouslySetInnerHTML={{
          __html: props.title2,
        }}
      />
      <div
        className="Count"
        style={{ backgroundColor: props.color2 }}
        dangerouslySetInnerHTML={{
          __html: props.Count,
        }}
      />
    </div>
  );
}

export default ColorCard;
