/* eslint-disable @next/next/no-img-element */
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../redux/store";
import { updateCart } from "../redux/actions/cartActions";
import RedButton from "./RedButton/RedButton";

function CartItemsListing() {
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);

  return (
    <div className="cartSideBar">
      {cart.map((e, i) => (
        <div key={i}>
          <div className="d-flex mt-1 mb-1 justify-content-between">
            <img
              src="https://picsum.photos/100"
              alt=""
              className="img rounded "
            />
            <div className="cart-item d-flex flex-column ms-1">
              <div className="product-name me-1">{e.productName}</div>
              <div className="quantity-controls">
                <button
                  className="decrement "
                  onClick={() => {
                    function addToCart(productId: number, newQuantity: number) {
                      if (e.quantity == 1) {
                        console.log("Delete now");
                        dispatch(
                          updateCart({
                            products: cart.filter(
                              (product) => product.pId !== e.pId
                            ),
                          })
                        );
                        return;
                      }
                      let existingProduct = cart.find(function (item) {
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
                                pId: e.pId,
                                productName: e.productName,
                                pPrice: e.pPrice,
                                quantity: newQuantity,
                              },
                            ],
                          })
                        );
                      }
                    }
                    addToCart(e.pId, -1);
                  }}
                >
                  -
                </button>
                <span className="quantity">{e.quantity}</span>
                <button
                  className="increment"
                  onClick={() => {
                    function addToCart(productId: number, newQuantity: number) {
                      let existingProduct = cart.find(function (item) {
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
                                pId: e.pId,
                                productName: e.productName,
                                pPrice: e.pPrice,
                                quantity: newQuantity,
                              },
                            ],
                          })
                        );
                      }
                    }
                    addToCart(e.pId, 1);
                    console.log(cart.length);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div
              className="totalPrice mt-auto mb-auto ms-5"
              onLoad={() => {
                console.log("loaded");
              }}
            >
              ${e.pPrice * e.quantity}
            </div>
          </div>
          <hr />
        </div>
      ))}
      <div className="Buy ms-5 mt-2">
        <RedButton text="Proceed to pay" />
      </div>
    </div>
  );
}

export default CartItemsListing;
