/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { updateCart, updatelist } from "../../redux/actions/cartActions";
import { IStore } from "../../redux/store";

export interface IProps {
  sale: string;
  hot: string;
  img: string;
  cart: string;
  price1: string;
  fashionttile: string;
  color1: string;
  color2: string;
  price: number;
  prodid: number;
}

function Fashion(props: IProps) {
  const [selected, setSelected] = useState(0);
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  const list = useSelector((state: IStore) => state.list.list);

  return (
    <Container className="Fashion-Body m-2">
      <Row>
        <Col>
          <div className="overflow-icons">
            <div>
              <div
                className="sale"
                dangerouslySetInnerHTML={{
                  __html: props.sale,
                }}
              />
              <div
                className="hot"
                dangerouslySetInnerHTML={{
                  __html: props.hot,
                }}
              />
            </div>
            <div className="icons-container">
              <div className="icons">
                <BsSearch color="black" size={17} className="icon" />
              </div>
              <div
                className="icons"
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
                            pId: props.prodid,
                            productName: props.fashionttile,
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
                          (product) => product.pId !== props.prodid
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
              >
                <BsHeart color="black" size={17} className="icon" />
              </div>
            </div>
          </div>
          <div className="showOnHover">
            <img src={props.img} alt="" className="img" />
            <div
              className="cart"
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
                            productName: props.fashionttile,
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
              <div className="ms-auto me-auto d-flex mt-3">
                <BsBag color="white" size={17} className="bagicon mt-1" />
                <div
                  className="ms-2"
                  dangerouslySetInnerHTML={{
                    __html: props.cart,
                  }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="Fashion-title mt-2 ms-2"
            dangerouslySetInnerHTML={{
              __html: props.fashionttile,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex mt-2 ms-2">
            <div
              className="price1"
              dangerouslySetInnerHTML={{
                __html: props.price1,
              }}
            />
            <div className="price">{props.price}$</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex mt-1 ms-2">
            <div className="color1" style={{ backgroundColor: props.color1 }} />
            <div
              className="ms-2 color2"
              style={{ backgroundColor: props.color2 }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Fashion;
