/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
export interface IProps {
  imageTitle: string;
  Sale: string;
  RandomImage: string;
  price1: string;
  price2: string;
}
function HomeFashionItem(props: IProps) {
  return (
    <div className="HomeFashionItem">
      <div
        className="Sale rounded"
        dangerouslySetInnerHTML={{
          __html: props.Sale,
        }}
      />
      <div className="Icons d-flex flex-row">
        <div className="Icon">
          <AiOutlineSearch size={30} />
        </div>
        <div className="Icon">
          <BsBag size={30} />
        </div>
        <div className="Icon">
          <AiOutlineHeart size={30} />
        </div>
      </div>
      <img src={props.RandomImage} alt="" className="img rounded " />
      <div className="Title-colors d-flex flex-row ">
        <div className="imageTitle">{props.imageTitle}</div>
        <div className="Colors d-flex flex-row ms-auto mt-auto mb-auto ">
          <div className="Color1 me-1 "></div>
          <div className="Color2 me-2 "></div>
        </div>
      </div>
      <div className="prices d-flex flex-row">
        <div
          className="price1"
          dangerouslySetInnerHTML={{
            __html: props.price1,
          }}
        />
        <div
          className="price2"
          dangerouslySetInnerHTML={{
            __html: props.price2,
          }}
        />
      </div>
    </div>
  );
}

export default HomeFashionItem;
