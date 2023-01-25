/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
import WhishList from "../../Utils/WhishList";
import CartItemsListing from "../../Utils/CartItemsListing";

export interface IProps {
  navOptions: { text: string; link: string }[];
  cartitems: string[];
  whishList: string[];
  src: string;
}

function Nav3(props: IProps) {
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

  const [isListEmpty, setIsListEmpy] = useState(true);
  const [isCartEmpty, setIsCartEmpy] = useState(true);

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

  useEffect(() => {
    if (list.length > 0) {
      setIsListEmpy(false);
    } else {
      setIsListEmpy(true);
    }
  }, [list]);

  useEffect(() => {
    if (cart.length > 0) {
      setIsCartEmpy(false);
    } else {
      setIsCartEmpy(true);
    }
  }, [cart]);

  return (
    <div className="Nav3-Body">
      <Container fluid>
        <Row>
          <div className="TopRibbon">
            FREE SHIPPING OVER $100 & FREE RETURNS
          </div>
        </Row>
      </Container>
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
                    {isListEmpty ? (
                      <h4 className="text-center">No items in Whish-list</h4>
                    ) : (
                      <div>
                        <WhishList />
                      </div>
                    )}
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
                    {isCartEmpty ? (
                      <h4 className="text-center">No items in Cart</h4>
                    ) : (
                      <div>
                        <CartItemsListing />
                      </div>
                    )}
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

export default Nav3;
