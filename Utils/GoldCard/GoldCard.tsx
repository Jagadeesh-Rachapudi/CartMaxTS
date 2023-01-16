/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import cartReducer from "../../redux/reducers/cartReducer";
import { IStore } from "../../redux/store";

export interface IProps {
  Cardtag: string;
  Cardtitle: string;
  price: number;
  src: string;
  prodid: number;
}

function GoldCard(props: IProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  return (
    <div className="GoldCard-Body">
      <a href="/JewelleryDetailsPage" target="__blank">
        <img src={props.src} alt="" className="img" />
      </a>
      <div
        className="GoldCard-tag mt-1"
        dangerouslySetInnerHTML={{
          __html: props.Cardtag,
        }}
      />
      <div className="GoldCard-title mt-2">{props.Cardtitle}</div>
      <div className="price mt-2 mb-2">${props.price}</div>
      <div
        className="Cart"
        onClick={() => {
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
                      pId: props.prodid,
                      productName: props.Cardtitle,
                      pPrice: props.price,
                      quantity: newQuantity,
                    },
                  ],
                })
              );
            }
          }
          addToCart(props.prodid, 1);
        }}
      >
        <BsBag color="white" className="icon" />
      </div>
    </div>
  );
}

export default GoldCard;
