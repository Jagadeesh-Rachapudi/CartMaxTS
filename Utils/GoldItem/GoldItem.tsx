/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface IProps {
  src: string;
  name: string;
}

function GoldItem(props: IProps) {
  return (
    <div className="GoldItem-Body">
      <div className="hover">
        <div className="img-Container">
          <img src={props.src} alt="" className="img p-3 " />
        </div>
        <div className="name-Container">
          <div
            className="name"
            dangerouslySetInnerHTML={{
              __html: props.name,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GoldItem;
