/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";

export interface IProps {
  src: string;
  navOptions: { text: string; link: string }[];
  cartitems: string[];
  whishList: string[];
}

function Nav2(props: IProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <Container fluid className="Nav2-Body">
      <Row>
        <Col className="d-flex">
          <img src={props.src} alt="" className="img " />
          <div className="rightIcons ms-auto d-flex">
            <div className="canvas">
              <Button onClick={handleShow} className="Menu-Button">
                <AiOutlineMenu size={17} className="me-2" />
                Menu
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h1>Menu</h1>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {props.navOptions.map(
                    (navOption: { text: string; link: string }, i) => (
                      <Nav.Link href={navOption.link} className="mb-3" key={i}>
                        {navOption.text}
                      </Nav.Link>
                    )
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <AiOutlineSearch
              className="Icon searchIcon mt-auto mb-auto"
              size={35}
            />
            <Button onClick={handleShow2} className="whishList-Button">
              <AiOutlineHeart className="Icon" size={35} />
            </Button>

            <Offcanvas show={show2} onHide={handleClose2} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h1>WhishList</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {props.whishList.map((text: string, i) => (
                  <Nav.Link className="mb-3" key={i}>
                    {text}
                  </Nav.Link>
                ))}
              </Offcanvas.Body>
            </Offcanvas>

            <Button onClick={handleShow3} className="cart-Button">
              <BsBag className="Icon" size={35} />
            </Button>

            <Offcanvas show={show3} onHide={handleClose3} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h1>CartItems</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {props.cartitems.map((text: string, i) => (
                  <Nav.Link className="mb-3" key={i}>
                    {text}
                  </Nav.Link>
                ))}
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav2;
