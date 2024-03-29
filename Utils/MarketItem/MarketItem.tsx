/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsSearch, BsBag, BsHeart } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import cartReducer from "../../redux/reducers/cartReducer";
import { IStore } from "../../redux/store";

export interface IProps {
  id: number;
  productName: string;
  url: string;
  price: number;
  tag1: string;
  tag2: string;
  aboveTitle: string;
  price2: string;
  Count: string;
  time: string;
}

function MarketItem(props: IProps) {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  return (
    <div className="MarketItem-Body rounded ">
      <div className="tags">
        <div
          className="tag1 rounded"
          dangerouslySetInnerHTML={{
            __html: props.tag1,
          }}
        />
        <div
          className="drop rounded"
          dangerouslySetInnerHTML={{
            __html: props.tag2,
          }}
        />
      </div>
      <div className="image-Container">
        <div className="Icons">
          <div
            className={selected === 1 ? "icon active-icon" : "icon"}
            onClick={() => {
              if (selected === 1) setSelected(0);
              else setSelected(1);
            }}
          >
            <BsSearch size={20} className="icon1" />
          </div>
          <div
            className={selected === 2 ? "icon active-icon" : "icon"}
            onClick={() => {
              if (selected === 2) setSelected(0);
              else setSelected(2);

              function addToCart(productId: number, newQuantity: number) {
                var existingProduct = cart.find(function (item) {
                  return item.pId === productId;
                });

                if (existingProduct) {
                  existingProduct.quantity += newQuantity;
                } else {
                  dispatch(
                    updateCart({
                      products: [
                        ...cart,
                        {
                          pId: props.id,
                          productName: props.productName,
                          pPrice: props.price,
                          quantity: newQuantity,
                        },
                      ],
                    })
                  );
                }
              }
              addToCart(props.id, 1);
            }}
          >
            <BsBag size={20} className="icon2" />
          </div>
          <div
            className={selected === 3 ? "icon active-icon" : "icon"}
            onClick={() => {
              if (selected === 3) setSelected(0);
              else setSelected(3);
            }}
          >
            <BsHeart size={20} className="icon3" />
          </div>
          <div
            className={selected === 4 ? "icon active-icon" : "icon"}
            onClick={() => {
              if (selected === 4) setSelected(0);
              else setSelected(4);
            }}
          >
            <BiRefresh size={20} className="icon4" />
          </div>
        </div>
        <img src={props.url} className="img" />
      </div>
      <div
        className="above-title"
        dangerouslySetInnerHTML={{
          __html: props.aboveTitle,
        }}
      />
      <div
        className="title2"
        dangerouslySetInnerHTML={{
          __html: props.productName,
        }}
      />
      <div className="Stars-Count">
        <div className="Stars">
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiOutlineStar color="#a0a0a0" />
        </div>
        <div
          className="Count"
          dangerouslySetInnerHTML={{
            __html: props.Count,
          }}
        />
      </div>
      <hr />
      <div className="prices">
        <div className="price1"> ${props.price}</div>
        <div
          className="price2"
          dangerouslySetInnerHTML={{
            __html: props.price2,
          }}
        />
        <div
          className="time"
          dangerouslySetInnerHTML={{
            __html: props.time,
          }}
        />
      </div>
    </div>
  );
}

export default MarketItem;
