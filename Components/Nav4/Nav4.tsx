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
import { RxCross1 } from "react-icons/rx";
import Form from "react-bootstrap/Form";
import GradiantButton from "../../Utils/GradiantButton/GradiantButton";

export interface IProps {
  src: string;
  navOptions: { text: string; link: string }[];
  cartitems: string[];
  whishList: string[];
  Hedder: string;
  text: string;
  buttonText: string;
}

function Nav4(props: IProps) {
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

  return (
    <div className="Nav4-Body">
      <Container fluid>
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
              {/* Search */}
              {/* <AiOutlineSearch
              className="Icon searchIcon mt-auto mb-auto"
              size={35}
            /> */}

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
              <AiOutlineSearch
                size={35}
                className={
                  clicked === true
                    ? "SearchedClicked Icon searchIcon mt-auto mb-auto "
                    : "SearchedNotClicked Icon searchIcon mt-auto mb-auto "
                }
                onClick={() => {
                  if (clicked === true) setClicked(false);
                  else setClicked(true);
                }}
              />
              {/* Search */}
              <button onClick={handleShow2} className=" ms-3 whishList-Button">
                <AiOutlineHeart className="Icon" size={35} />
              </button>

              <Offcanvas show={show2} onHide={handleClose2} placement="end">
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

              <Offcanvas show={show3} onHide={handleClose3} placement="end">
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
      <Container className="Hedder" fluid>
        <Row>
          <Col>
            <div className="tag mb-2 ">
              <span>CLASSIC MEN&apos;S SHOES & FASHION</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="title mb-3 "
              dangerouslySetInnerHTML={{
                __html: props.Hedder,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="text mt-2 "
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Button-Container mt-5 ">
              <GradiantButton text={props.buttonText} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav4;
