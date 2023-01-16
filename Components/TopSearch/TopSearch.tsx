/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { BsBag } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import cartReducer from "../../redux/reducers/cartReducer";
import { IStore } from "../../redux/store";
import { useEffect } from "react";

export interface IProps {
  src: string;
  DropDownktext: string;
  Option1: string;
  Option2: string;
  Search: string;
  Cart: string;
  Price: string;
  cartitems: string[];
}

function TopSearch(props: IProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sum, setSum] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  return (
    <div className="TopSearch-Body">
      <Container className="pt-3" fluid>
        <Row>
          <Col className="d-flex flex-row justify-content-evenly">
            <img src={props.src} alt="" className="logo" />
            <form className=" form-container d-flex flex-row mt-3">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="DropDown-Button"
                >
                  {props.DropDownktext}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {props.Option1}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {props.Option2}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                type="text"
                className="Search-Bar"
                placeholder="Search for Products"
              ></input>
              <button className="">{props.Search}</button>
            </form>
            <div className="d-flex flex-row mt-2">
              <BsBag
                color="white"
                className="cart mt-auto mb-auto me-2 "
                size={40}
                onClick={handleShow}
              />
              <div className=" mt-auto mb-auto ms-2 ">
                <div className="title">{props.Search}</div>
                <article className="price">{props.Price}</article>
              </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h1>Cart</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
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
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-row justify-content-evenly">
            <form className=" form-container2 d-flex flex-row mt-3 justify-contrent-center ">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="DropDown-Button"
                >
                  {props.DropDownktext}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {props.Option1}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {props.Option2}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                type="text"
                className="Search-Bar"
                placeholder="Search for Products"
              ></input>
              <button className="">{props.Search}</button>
            </form>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopSearch;
