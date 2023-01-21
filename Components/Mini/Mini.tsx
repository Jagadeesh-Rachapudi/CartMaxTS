/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import RedButton from "../../Utils/RedButton/RedButton";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import { IStore } from "../../redux/store";

export interface IProps {
  tag: string;
  title: string;
  price1: string;
  price2: string;
  text: string;
  ButtonText: string;
  RandomImage1: string;
  RandomImage2: string;
}

function Mini(props: IProps) {
  const [value, setValue] = useState(2);
  const addHandler = () => {
    setValue(value + 1);
  };
  const subHandler = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);

  return (
    <Container className="Mini-Body mb-5" fluid="xxl">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <div className="Image-Container">
            <img src={props.RandomImage1} alt="" className="img" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <div className="content">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="prices d-flex flex-row ">
              <div
                className="price1 mt-auto mb-auto"
                dangerouslySetInnerHTML={{
                  __html: props.price1,
                }}
              />
              <div
                className="price2 ms-2 mt-auto mb-auto"
                dangerouslySetInnerHTML={{
                  __html: props.price2,
                }}
              />
            </div>
            <div
              className="text mt-3 mb-3"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="images  ">
              <img
                src={props.RandomImage2}
                alt=""
                className="img2 ms-2 me-2 "
              />
              <img
                src={props.RandomImage2}
                alt=""
                className="img3 ms-2 me-2 "
              />
              <img
                src={props.RandomImage2}
                alt=""
                className="img4 ms-2 me-2 "
              />
            </div>
            <div className="CartButtons d-flex flex-row ">
              <Card className="Counter p-0">
                <Card.Body>
                  <button className="Plus  me-2  rounded" onClick={addHandler}>
                    +
                  </button>
                  {value}
                  <button className="Minus  ms-2  rounded" onClick={subHandler}>
                    -
                  </button>
                </Card.Body>
              </Card>
              <div
                className=" ms-3 mt-auto mb-auto"
                onClick={() => {
                  function addToCart(productId: number, newQuantity: number) {
                    var existingProduct = cart.find(function (item: any) {
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
                              pId: 100,
                              productName: "Pleated Mini Bucket Bag",
                              pPrice: 80.99,
                              quantity: newQuantity,
                            },
                          ],
                        })
                      );
                    }
                  }
                  addToCart(100, value);
                }}
              >
                <RedButton text={props.ButtonText} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Mini;
