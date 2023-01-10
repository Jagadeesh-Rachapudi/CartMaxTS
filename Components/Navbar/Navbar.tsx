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

export interface IProps {
  navOptions: { text: string; link: string }[];
  cartitems: string[];
  whishList: string[];
  src: string;
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
              <div className="line mb-1 ">24 Line</div>
              <div className="number">760 398 9595</div>
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLogo%20(6).png?alt=media&token=0dde3308-0c58-4ebd-b176-51e84ac18961"
            alt=""
            className="img mt-auto mb-auto"
          />
          <div className="right-Icons d-flex mt-auto mb-auto ">
            <div className="cartPrice">
              <div className="cart">Cart</div>
              <div className="price">$9,983</div>
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
              <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
              {props.cartitems.map((cartItem, id) => (
                <h6 key={id}>{cartItem}</h6>
              ))}
              <div className="price"> total price $9,983</div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas show={show2} onHide={handleClose2} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>whishList</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
              {props.whishList.map((cartItem, id) => (
                <h6 key={id}>{cartItem}</h6>
              ))}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Row>
      <Row className="p-0">
        <Col className="p-0">
          <div className="secondContainer d-flex ">
            <div className="box"></div>
            <div className="Links mt-auto mb-auto">
              <div className="d-flex ms-3 menu ">
                <BiMenuAltLeft size={30} color="black" className="me-2" />
                <div className="menutext mt-auto mb-auto ">MENU</div>
              </div>
              <div className="navlinks mt-auto mb-auto ">
                <Nav.Link href="#Bridal" className="d-flex">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fnecklace.png?alt=media&token=bec6aaf6-3e75-4162-bc41-5227715689bc"
                    alt=""
                    className="bridal me-2 "
                  />
                  <div className="text">Bridal juwellary</div>
                </Nav.Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
