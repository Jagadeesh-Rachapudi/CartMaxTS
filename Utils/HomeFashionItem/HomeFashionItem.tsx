/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { updateCart, updatelist } from "../../redux/actions/cartActions";
import { IStore } from "../../redux/store";

export interface IProps {
  imageTitle: string;
  Sale: string;
  RandomImage: string;
  price1: string;
  price: number;
  prodId: number;
}
function HomeFashionItem(props: IProps) {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  const list = useSelector((state: IStore) => state.list.list);

  const router = useRouter();
  return (
    <div className="HomeFashionItem">
      <div
        className="Sale rounded"
        dangerouslySetInnerHTML={{
          __html: props.Sale,
        }}
      />
      <div className="hover">
        <div className="Icons d-flex flex-row">
          <div
            className="Icon"
            onClick={() => {
              if (selected === 1) setSelected(0);
              else setSelected(1);
            }}
            style={{
              color: selected === 1 ? "white" : "black",
              backgroundColor: selected === 1 ? "#d9121f" : "white",
            }}
          >
            <AiOutlineSearch size={30} />
          </div>
          <div
            className="Icon"
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
                          pId: props.prodId,
                          productName: props.imageTitle,
                          pPrice: props.price,
                          quantity: newQuantity,
                        },
                      ],
                    })
                  );
                }
              }
              addToCart(props.prodId, 1);
              // console.log(props.prodId);
            }}
            style={{
              color: selected === 2 ? "white" : "black",
              backgroundColor: selected === 2 ? "#d9121f" : "white",
            }}
          >
            <BsBag size={30} />
          </div>
          <div
            className="Icon"
            onClick={() => {
              if (selected === 3) setSelected(0);
              else setSelected(3);

              const add = () => {
                setAdded(!added);
                dispatch(
                  updatelist({
                    list: [
                      ...list,
                      {
                        pId: props.prodId,
                        productName: props.imageTitle,
                        pPrice: props.price,
                      },
                    ],
                  })
                );
              };
              const remove = () => {
                setAdded(!added);
                dispatch(
                  updatelist({
                    list: list.filter(
                      (product) => product.pId !== props.prodId
                    ),
                  })
                );
              };
              if (added == false) {
                add();
              } else if (added == true) {
                remove();
              }
            }}
            style={{
              color: selected === 3 ? "white" : "black",
              backgroundColor: selected === 3 ? "#d9121f" : "white",
            }}
          >
            <AiOutlineHeart size={30} />
          </div>
        </div>
        <img src={props.RandomImage} alt="" className="img rounded " />
      </div>
      <div className="Title-colors d-flex flex-row">
        <div
          className="imageTitle"
          onClick={() => {
            router.push("/HomeFashionsPDP");
          }}
        >
          {props.imageTitle}
        </div>
        <div className="Colors d-flex flex-row ms-auto mt-auto mb-auto ">
          <div
            onClick={() => {
              if (active === 1) setActive(0);
              else setActive(1);
            }}
            className={
              active === 1 ? "border1 me-2 rounded" : "bordernone me-2 "
            }
          >
            <div className="Color1 me-1"></div>
          </div>
          <div
            onClick={() => {
              if (active === 2) setActive(0);
              else setActive(2);
            }}
            className={
              active === 2 ? "border2 me-2 rounded" : "bordernone me-2 "
            }
          >
            <div className="Color2 me-2"></div>
          </div>
        </div>
      </div>
      <div className="prices d-flex flex-row">
        <div
          className="price1"
          dangerouslySetInnerHTML={{
            __html: props.price1,
          }}
        />
        <div className="price2">{props.price} $</div>
      </div>
    </div>
  );
}

export default HomeFashionItem;
