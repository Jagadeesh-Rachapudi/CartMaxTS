/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { BsSearch, BsPerson, BsHeart, BsBag } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import cartReducer from "../../redux/reducers/cartReducer";
import { IStore } from "../../redux/store";
import { useEffect } from "react";

export interface IProps {
  src: string;
  text1: string;
  text2: string;
  Categories: string;
  Department: string;
  title: string;
  tag: string;
  price: string;
  buttontext: string;
  options: string[];
  dummy1: string[];
  dummy2: string[];
}

function Hedder6(props: IProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);

  return (
    <div>
      <Container className="Hedder6-Search" fluid="lg">
        <Row>
          <Col className="d-flex justify-content-between searchcontainer ">
            <div className="d-flex">
              <div className="megaphone-Container">
                <img src={props.src} alt="" className="megaphone" />
              </div>
              <div className="text ms-2">
                <div
                  className="text1 mb-1"
                  dangerouslySetInnerHTML={{
                    __html: props.text1,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.text2,
                  }}
                />
              </div>
            </div>
            <div className="search">
              <form className="d-flex">
                <input type="search" name="txt" placeholder="Search Products" />
                <div className="dropdown">
                  <Dropdown>
                    <Dropdown.Toggle className="dd-button" id="dropdown-basic">
                      {props.Categories}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {props.dummy2.map((e, i) => (
                        <Dropdown.Item key={i}>{e}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <button className="Button" type="submit">
                  <BsSearch color="white" size={25} />
                </button>
              </form>
            </div>
            <div className="Righticons">
              <div className="ms-1 icon-container me-1">
                <BsPerson color="black" size={20} className="icon" />
              </div>
              <div className="ms-1 icon-container me-1">
                <BsHeart
                  color="black"
                  size={20}
                  className="icon"
                  onClick={handleShow2}
                />
              </div>
              <div className="ms-1 icon-container me-1">
                <BsBag
                  color="black"
                  size={20}
                  className="icon"
                  onClick={handleShow}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="Hedder6-Body" fluid>
        <Container fluid="md">
          <Row>
            <Col className="hedder-box">
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle className="ddButton" id="dropdown-basic">
                    <div className="me-2">
                      <BiCoinStack color="black" size={17} className="icon" />
                    </div>
                    {props.Department}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {props.options.map((e, i) => (
                      <Dropdown.Item key={i}>{e}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="hedder-content">
                <Carousel variant="dark">
                  {props.dummy1.map((e, i) => (
                    <Carousel.Item key={i}>
                      <div className="content" key={i}>
                        <div
                          className="tag mb-2"
                          dangerouslySetInnerHTML={{
                            __html: props.tag,
                          }}
                        />
                        <div
                          className="title mb-2"
                          dangerouslySetInnerHTML={{
                            __html: props.title,
                          }}
                        />
                        <div
                          className="price mb-2"
                          dangerouslySetInnerHTML={{
                            __html: props.price,
                          }}
                        />
                        <button
                          className="Button"
                          dangerouslySetInnerHTML={{
                            __html: props.buttontext,
                          }}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            {/* hide */}
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h1>Cart</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-column">
                <div className="cartSideBar">
                  {cart.map((e, i) => (
                    <div key={i}>
                      <div className="d-flex mt-1 mb-1 justify-content-between">
                        <img
                          src="https://picsum.photos/100"
                          alt=""
                          className="img"
                        />
                        <div className="cart-item d-flex flex-column ms-1">
                          <div className="product-name me-1">
                            {e.productName}
                          </div>
                          <div className="quantity-controls">
                            <button
                              className="decrement "
                              onClick={() => {
                                function addToCart(
                                  productId: number,
                                  newQuantity: number
                                ) {
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
                                  let existingProduct = cart.find(function (
                                    item
                                  ) {
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
                                function addToCart(
                                  productId: number,
                                  newQuantity: number
                                ) {
                                  let existingProduct = cart.find(function (
                                    item
                                  ) {
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
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <span
                          className="totalPrice mt-auto mb-auto ms-5"
                          onLoad={() => {
                            console.log("loaded");
                          }}
                        >
                          ${e.pPrice * e.quantity}
                        </span>
                      </div>
                      <hr />
                    </div>
                  ))}
                  <div className="Buy">
                    {/* <span className="totalPrice mt-auto mb-auto ms-5">
                    2 {sum} 1
                  </span> */}
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            {/*  */}
            <Offcanvas show={show2} onHide={handleClose2} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h1>WhishList</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body></Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hedder6;
