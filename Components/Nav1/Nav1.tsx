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
import { RxCross1 } from "react-icons/rx";
import Form from "react-bootstrap/Form";
import SearchedProducts, { PropHandler } from "../../pages/SearchedProducts";

export interface IProps {
  navOptions: { text: string; link: string }[];
  cartitems: string[];
  whishList: string[];
}

function Nav1(props: IProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [clicked, setClicked] = useState(false);

  const [userData, setUserData] = useState("");

  function f(event: any) {
    console.log(event?.target.value);
    setUserData(event?.target.value);
    PropHandler(userData);
  }

  return (
    <div className="navbar-Container">
      <Container>
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
              {/* menu end  */}

              <div className="logo bg-transparent ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLogo.png?alt=media&token=6dd2fb25-170b-4b1b-bb60-dc0cc8ba3504"
                  alt=""
                />
              </div>
              <div className="links d-none d-lg-flex d-xl-flex d-xxl-flex flex-row mt-auto mb-auto ">
                {props.navOptions.map(
                  (navOption: { text: string; link: string }, i) => (
                    <Nav.Link href={navOption.link} className="me-3" key={i}>
                      {navOption.text}
                    </Nav.Link>
                  )
                )}
              </div>
              <div className="d-flex flex-row mt-auto mb-auto  ">
                <Form className="d-flex search ">
                  <Form.Control
                    type="search"
                    data-backdrop="static"
                    data-keyboard="false"
                    placeholder="Search"
                    className={
                      clicked === true
                        ? " SearchedNotClicked me-2"
                        : "SearchedClicked me-2"
                    }
                    aria-label="Search"
                    onChange={f}
                  />
                  <a
                    className={
                      clicked === true
                        ? " SearchedNotClicked btn btn-success"
                        : "SearchedClicked btn btn-success"
                    }
                    href="/SearchedProducts "
                    target="__blank"
                  >
                    Search
                  </a>
                </Form>

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
                  onClick={handleShow2}
                  className="p-1 mt-1 "
                >
                  <BsHeart size={17} />
                </Button>

                <Offcanvas show={show3} onHide={handleClose3} placement={"end"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart Items</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {props.cartitems.map((cartItem, id) => (
                      <h6 key={id}>{cartItem}</h6>
                    ))}
                  </Offcanvas.Body>
                </Offcanvas>
                {/* Cart OffCanvas Ends */}

                {/* Cart OffCanvas Starts */}
                <Button variant="transparent" onClick={handleShow3}>
                  <BsBag size={17} />
                </Button>

                <Offcanvas show={show2} onHide={handleClose2} placement={"end"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart Items</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {props.whishList.map((cartItem, id) => (
                      <h6 key={id}>{cartItem}</h6>
                    ))}
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

export default Nav1;
