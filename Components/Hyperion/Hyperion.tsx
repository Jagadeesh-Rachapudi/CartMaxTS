/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCheck } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import { IStore } from "../../redux/store";

export interface IProps {
  tag: string;
  sale: string;
  title: string;
  price1: string;
  price2: string;
  text: string;
  color: string;
  size: string;
  XL: string;
  XLL: string;
  plus: string;
  minus: string;
  shirt: string;
  buttontext: string;
  dummy: string[];
}
function Hyperion(props: IProps) {
  const [active, setActive] = useState(-1);
  const [size, setSize] = useState("XLL");
  const [value, setValue] = useState(2);

  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);

  return (
    <Container className="Hyperion-Body" fluid>
      <Row>
        <Col
          xs={0}
          sm={3}
          md={3}
          lg={7}
          xl={7}
          xxl={9}
          className="light p-0"
        ></Col>
        <Col xs={12} sm={9} md={9} lg={5} xl={5} xxl={3} className="dark p-0">
          <div className="content">
            <div className="tag-Container">
              <div
                className="tag"
                dangerouslySetInnerHTML={{
                  __html: props.tag,
                }}
              />
              <div
                className="sale mt-auto mb-auto"
                dangerouslySetInnerHTML={{
                  __html: props.sale,
                }}
              />
            </div>
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="d-flex mt-3">
              <div
                className="price1"
                dangerouslySetInnerHTML={{
                  __html: props.price1,
                }}
              />
              <div
                className="ms-3 price2"
                dangerouslySetInnerHTML={{
                  __html: props.price2,
                }}
              />
            </div>
            <div
              className="text mt-3"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="colors mt-4 d-flex">
              <div
                className="color mt-auto mb-auto"
                dangerouslySetInnerHTML={{
                  __html: props.color,
                }}
              />
              <div
                className=" ms-5 border1"
                onClick={() => {
                  if (active === 1) setActive(-1);
                  else setActive(1);
                }}
              >
                <div className="color1">
                  <FaCheck
                    size={10}
                    color={active === 1 ? "white" : "transparent"}
                    className="icon"
                  />
                </div>
              </div>
              <div
                className="ms-2 border2"
                onClick={() => {
                  if (active === 2) setActive(-1);
                  else setActive(2);
                }}
              >
                <div className="color2">
                  <FaCheck
                    size={10}
                    color={active === 2 ? "white" : "transparent"}
                    className="icon"
                  />
                </div>
              </div>
              <div
                className="ms-2 border3"
                onClick={() => {
                  if (active === 3) setActive(-1);
                  else setActive(3);
                }}
              >
                <div className="color3">
                  <FaCheck
                    size={10}
                    color={active === 3 ? "white" : "transparent"}
                    className="icon"
                  />
                </div>
              </div>
            </div>
            <div className="sizes d-flex mt-4">
              <div
                className="size mt-auto mb-auto me-3"
                dangerouslySetInnerHTML={{
                  __html: props.size,
                }}
              />
              <div className="dropdown ms-5 ">
                <Dropdown>
                  <Dropdown.Toggle
                    className="ddbutton"
                    id="dropdown-basic"
                    variant="light"
                  >
                    {size}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setSize("XL");
                      }}
                    >
                      {props.XL}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setSize("XLL");
                      }}
                    >
                      {props.XLL}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="button-counter d-flex mt-4">
              <div className="Counter">
                <div className="contents d-flex justify-content-around">
                  <div
                    className="decrement"
                    onClick={() => {
                      if (value > 1) setValue(value - 1);
                    }}
                    dangerouslySetInnerHTML={{
                      __html: props.minus,
                    }}
                  />
                  <div className="active">{value}</div>
                  <div
                    onClick={() => {
                      setValue(value + 1);
                    }}
                    className="increment"
                    dangerouslySetInnerHTML={{
                      __html: props.plus,
                    }}
                  />
                </div>
              </div>
              <button
                className="ms-5 Button"
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
                              pId: 104,
                              productName: "Hyperion",
                              pPrice: 80.99,
                              quantity: newQuantity,
                            },
                          ],
                        })
                      );
                    }
                  }
                  addToCart(104, value);
                }}
                dangerouslySetInnerHTML={{
                  __html: props.buttontext,
                }}
              />
            </div>
          </div>

          <Carousel variant="dark">
            {props.dummy.map((e, i) => (
              <Carousel.Item key={i}>
                <div className="shirt mt-5 ">
                  <img src={props.shirt} alt="" className="shirt-img" />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Hyperion;
