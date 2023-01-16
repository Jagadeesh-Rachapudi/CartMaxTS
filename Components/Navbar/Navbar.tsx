/* eslint-disable @next/next/no-img-element */
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BiPhoneCall, BiMenuAltLeft } from "react-icons/bi";
import { BsBag, BsPerson } from "react-icons/bs";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import cartReducer from "../../redux/reducers/cartReducer";
import { IStore } from "../../redux/store";
import { useEffect } from "react";

export interface IProps {
  Line: string;
  Number: string;
  src: string;
  Cart: string;
  Price: string;
  Menu: string;
  WishList: string;
  NavOptions: { link: string; href: string; Option: string }[];
  Languages: string[];
}

function Navbar(props: IProps) {
  const handleSubmit = (event: any) => {
    // event.preventDefault();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);

  const [Language, setLanguage] = useState("ENGLISH");
  return (
    <Container className="Navbar-Body" fluid>
      <Row>
        <Col className="topcontainer">
          <div className="box"></div>
          <div className="search ms-3 mt-auto mb-auto">
            <form onSubmit={handleSubmit}>
              <button type="submit" className="SearchButton">
                <div className="icon">
                  <AiOutlineSearch size={17} color="black" className="mt-1" />
                </div>
              </button>
              <input
                type="search"
                name="txt"
                placeholder="Search"
                className="searchbar "
              />
            </form>
          </div>
          <div className="call mt-auto mb-auto d-flex ">
            <div className="icon mt-auto mb-auto me-2 ">
              <BiPhoneCall size={17} color="black" className="callIcon" />
            </div>
            <div>
              <div
                className="line mb-1"
                dangerouslySetInnerHTML={{
                  __html: props.Line,
                }}
              />
              <div
                className="number"
                dangerouslySetInnerHTML={{
                  __html: props.Number,
                }}
              />
            </div>
          </div>
          <img src={props.src} alt="" className="img mt-auto mb-auto" />
          <div className="right-Icons d-flex mt-auto mb-auto ">
            <div className="cartPrice">
              <div
                className="cart"
                dangerouslySetInnerHTML={{
                  __html: props.Cart,
                }}
              />
              <div
                className="price"
                dangerouslySetInnerHTML={{
                  __html: props.Price,
                }}
              />
            </div>
            <div className="icon mt-auto mb-auto me-2" onClick={handleShow}>
              <BsBag size={17} color="black" className="callIcon" />
            </div>
            <div className="icon mt-auto mb-auto me-2 ">
              <AiOutlineHeart
                size={17}
                color="black"
                className="callIcon"
                onClick={handleShow2}
              />
            </div>
            <div className="icon mt-auto mb-auto me-2 ">
              <BsPerson size={17} color="black" className="callIcon" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="hidden">
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: props.Cart,
                  }}
                />
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
                        <div className="product-name me-1">{e.productName}</div>
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

          <Offcanvas show={show2} onHide={handleClose2} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: props.WishList,
                  }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column"></Offcanvas.Body>
          </Offcanvas>
        </div>
      </Row>
      <Row className="p-0">
        <Col className="p-0 secondContainer ">
          <div className="box"></div>
          <div className="menu" onClick={handleShow3}>
            <BiMenuAltLeft size={30} color="black" className="me-2" />
            <div
              className="menutext mt-auto mb-auto"
              dangerouslySetInnerHTML={{
                __html: props.Menu,
              }}
            />
          </div>
          <div className="Links mt-auto mb-auto">
            <div className="navlinks mt-auto mb-auto">
              {props.NavOptions.map(
                (
                  navOption: { link: string; href: string; Option: string },
                  i
                ) => (
                  <div key={i}>
                    <Nav.Link
                      href={navOption.href}
                      className="ms-3 d-flex me-3"
                    >
                      <img src={navOption.link} alt="" className="me-1 " />
                      <div
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: navOption.Option,
                        }}
                      />
                    </Nav.Link>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="DropDown">
            <Dropdown as={ButtonGroup}>
              <Button variant="light" className="bg-transparent mb-1">
                {Language}
              </Button>
              <Dropdown.Toggle
                split
                variant="light"
                id="dropdown-split-basic"
                className="bg-transparent mb-1"
              />
              <Dropdown.Menu>
                {props.Languages.map((e, i) => (
                  <Dropdown.Item
                    key={i}
                    onClick={() => {
                      if (Language != e) {
                        setLanguage(e);
                      } else {
                        setLanguage("ENGLISH");
                      }
                    }}
                  >
                    {e}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row>
        <Offcanvas
          show={show3}
          onHide={handleClose3}
          scroll={true}
          backdrop={true}
          className="row2Navbar"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h1
                dangerouslySetInnerHTML={{
                  __html: props.Menu,
                }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="menuLinks">
              {props.NavOptions.map(
                (
                  navOption: { link: string; href: string; Option: string },
                  i
                ) => (
                  <div key={i}>
                    <Nav.Link
                      key={i}
                      href={navOption.href}
                      className="ms-3  mb-3 menuLink d-flex"
                    >
                      <img src={navOption.link} alt="" className="ms-3 me-1" />
                      <div
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: navOption.Option,
                        }}
                      />
                    </Nav.Link>
                  </div>
                )
              )}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </Container>
  );
}

export default Navbar;
