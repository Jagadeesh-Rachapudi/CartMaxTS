/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { BsSearch, BsPerson, BsBag, BsHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { RxCross1 } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";
import { updateCart, updatelist } from "../../redux/actions/cartActions";
import RedButton from "../../Utils/RedButton/RedButton";
import { GiPerspectiveDiceSixFacesTwo } from "react-icons/gi";

export interface IProps {
  navOptions: { text: string; link: string }[];
  cartitems: string[];
  whishList: string[];
  src: string;
}

function Nav8(props: IProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [clicked, setClicked] = useState(true);
  const [sum, setSum] = useState(0);

  const [prices, setPrices] = useState([
    {
      id: -1,
      price: 0,
      quanti: 0,
    },
  ]);

  const [userData, setUserData] = useState("");

  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  const list = useSelector((state: IStore) => state.list.list);

  function f(event: any) {
    setUserData(event?.target.value);
    event.preventDefault();
    console.log(userData);
  }

  const handleAddPrice = (newPrice: {
    id: number;
    price: number;
    quanti: number;
  }) => {
    const productExists = prices.some((price) => price.id === newPrice.id);
    if (!productExists) {
      setPrices((prices) => [...prices, newPrice]);
    } else {
      // console.log("new price added");
      console.log(prices);
    }
    const uniquePrices = prices.filter(
      (newPrice, index, self) =>
        index === self.findIndex((p) => p.id === newPrice.id)
    );
    // console.log(uniquePrices);
    setPrices(uniquePrices.slice());
  };

  return (
    <div className="Nav8-Body">
      <Container fluid>
        <Row>
          <Col>
            <div className="container d-flex flex-row justify-content-between">
              {/* menu start */}
              <div className="d-block  d-lg-none d-xl-none d-xxl-none  bg-transparent ">
                <Button
                  variant="light"
                  className="d-lg-none h-75 mt-2 mb-auto p-2 bg-transparent border-0"
                  onClick={handleShow}
                >
                  <AiOutlineMenu size={23} />
                </Button>
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  responsive="lg"
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>MENU</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="d-flex flex-column d-lg-none d-xl-none d-xxl-none ">
                    {props.navOptions.map(
                      (navOption: { text: string; link: string }, i) => (
                        <Nav.Link
                          href={navOption.link}
                          className="mb-3"
                          key={i}
                        >
                          {navOption.text}
                        </Nav.Link>
                      )
                    )}
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className="logo bg-transparent ">
                <img src={props.src} alt="" />
              </div>
              <div className="links d-none d-lg-flex d-xl-flex d-xxl-flex flex-row mt-auto mb-auto me-5 ">
                {props.navOptions.map(
                  (navOption: { text: string; link: string }, i) => (
                    <Nav.Link href={navOption.link} className="me-3" key={i}>
                      {navOption.text}
                    </Nav.Link>
                  )
                )}
              </div>
              <div className="d-flex flex-row mt-auto mb-auto  ">
                <form name="search" className="d-flex flex-row search">
                  <Form.Control
                    placeholder="Search"
                    type="text"
                    name="txt"
                    className={
                      clicked === true
                        ? " SearchedNotClicked me-2  "
                        : "SearchedClicked me-2  "
                    }
                  />
                  <button
                    className={
                      clicked === true
                        ? " SearchedNotClicked btn btn-success"
                        : "SearchedClicked btn btn-success"
                    }
                    type="submit"
                  >
                    Search
                  </button>
                  <button
                    className={
                      clicked === true
                        ? " SearchedNotClicked btn btn-success ms-2  "
                        : "SearchedClicked btn btn-success ms-2  "
                    }
                    onClick={(event) => {
                      if (clicked === true) setClicked(false);
                      else setClicked(true);
                      event.preventDefault();
                    }}
                  >
                    <RxCross1 />
                  </button>
                </form>
                <Nav.Link className="me-1 pt-2 me-3">
                  <BsSearch
                    size={17}
                    className={
                      clicked === true
                        ? "SearchedClicked"
                        : "SearchedNotClicked"
                    }
                    onClick={() => {
                      if (clicked === true) setClicked(false);
                      else setClicked(true);
                    }}
                  />
                </Nav.Link>
                <Nav.Link href="#link" className="me-1 mt-2 me-3">
                  <BsPerson size={17} />
                </Nav.Link>

                {/* Cart OffCanvas Starts */}
                <Button
                  variant="transparent"
                  onClick={handleShow3}
                  className="p-1 mt-1 "
                >
                  <BsHeart size={17} />
                </Button>

                <Offcanvas show={show3} onHide={handleClose3} placement={"end"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>WhishList</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {list.map((e, i) => (
                      <div key={i} className="cartSideBar">
                        <hr />
                        <div className="d-flex">
                          <div>
                            <img
                              src="https://picsum.photos/100"
                              alt=""
                              className="img rounded "
                            />
                          </div>
                          <div>
                            <div className=" ms-5 product-name">
                              {e.productName}
                            </div>
                            <div
                              className="ms-4 mt-3"
                              onClick={() => {
                                dispatch(
                                  updatelist({
                                    list: list.filter(
                                      (product) => product.pId !== e.pId
                                    ),
                                  })
                                );
                              }}
                            >
                              <RedButton text="Remove from Whishlist" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Offcanvas.Body>
                </Offcanvas>
                {/* Cart OffCanvas Ends */}

                {/* Cart OffCanvas Starts */}
                <Button variant="transparent" onClick={handleShow2}>
                  <BsBag size={17} />
                </Button>

                <Offcanvas show={show2} onHide={handleClose2} placement={"end"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart Items</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
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
                                    handleAddPrice({
                                      id: e.pId,
                                      price: e.pPrice,
                                      quanti: e.quantity,
                                    });
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
                                    handleAddPrice({
                                      id: e.pId,
                                      price: e.pPrice,
                                      quanti: e.quantity,
                                    });
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
                        <button className="btn btn-danger">
                          Proceed to pay
                        </button>
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
                {/* Cart OffCanvas Ends */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav8;
