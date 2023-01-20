/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";

export interface IProps {
  sale: string;
  Option1: string;
  Option2: string;
  WatchName: string;
  price: string;
  src: string;
}

function WatchItem2(props: IProps) {
  const [active, setActive] = useState(0);
  return (
    <div className="WatchItem2-Body rounded">
      <div
        className="sale"
        dangerouslySetInnerHTML={{
          __html: props.sale,
        }}
      />
      <div className="image-Icons-Conatiner">
        <div className="img-container">
          <img src={props.src} alt="" className="img" />
        </div>
        <div className="icons">
          <div
            className="whishlist d-flex "
            style={{
              color: active !== 1 ? "black" : "black",
              backgroundColor: active !== 1 ? "white" : "#b38068",
            }}
            onClick={() => {
              if (active === 1) setActive(0);
              else setActive(1);
            }}
          >
            <AiOutlineHeart size={17} className="mt-1  ms-1 me-1" />
            <div
              className="mt-1"
              dangerouslySetInnerHTML={{
                __html: props.Option1,
              }}
            />
          </div>
          <div
            className="cart d-flex"
            style={{
              color: active !== 2 ? "black" : "black",
              backgroundColor: active !== 2 ? "white" : "#b38068",
            }}
            onClick={() => {
              if (active === 2) setActive(0);
              else setActive(2);
            }}
          >
            <BsBag size={17} className="mt-1   me-1" />
            <div
              className="mt-1"
              dangerouslySetInnerHTML={{
                __html: props.Option2,
              }}
            />
          </div>
          <div
            className="refresh"
            style={{
              color: active !== 3 ? "black" : "black",
              backgroundColor: active !== 3 ? "white" : "#b38068",
            }}
            onClick={() => {
              if (active === 3) setActive(0);
              else setActive(3);
            }}
          >
            <MdCompareArrows size={17} className="mt-1" />
          </div>
        </div>
      </div>
      <hr />
      <div style={{ backgroundColor: "#292929" }} className="pt-2 pt-2 " >
        <div
          className="watch-name"
          dangerouslySetInnerHTML={{
            __html: props.WatchName,
          }}
        />
        <div
          className="price"
          dangerouslySetInnerHTML={{
            __html: props.price,
          }}
        />
      </div>
    </div>
  );
}

export default WatchItem2;
