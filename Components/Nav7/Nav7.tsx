/* eslint-disable @next/next/no-img-element */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export interface IProps {
  src: string;
  phone: string;
  mail: string;
  Option1: string;
  Option2: string;
  Option3: string;
  Option4: string;
  Option5: string;
  Option6: string;
}

function Nav7(props: IProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="Nav7-Body" fluid="md">
      <Row>
        <Col className="topContainer">
          <div>
            <div className="Nav-Container2">
              <HiMenu
                size={25}
                color="black"
                onClick={handleShow}
                className="menuicon"
              />
            </div>
          </div>
          <div className="logo-Container">
            <img src={props.src} alt="" className="img" />
          </div>
          <div>
            <Navbar bg="transparent" expand="lg" className="Nav-Container">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home3" className="navLinks">
                      {props.Option1}
                    </Nav.Link>
                    <NavDropdown
                      title="About Us"
                      id="basic-nav-dropdown"
                      className="navLinks"
                    >
                      <NavDropdown.Item href="#AboutUS" className="navLinks">
                        {props.Option2}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Blog"
                      id="basic-nav-dropdown"
                      className="navLinks"
                    >
                      <NavDropdown.Item href="#Blog" className="navLinks">
                        {props.Option3}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Pages"
                      id="basic-nav-dropdown"
                      className="navLinks"
                    >
                      <NavDropdown.Item href="#Pages" className="navLinks">
                        {props.Option4}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Features" className="navLinks">
                      {props.Option5}
                    </Nav.Link>
                    <Nav.Link href="#ContactUs" className="navLinks">
                      {props.Option6}
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h1>Menu</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav7links2">
                  <Nav.Link href="#home" className="navLinks">
                    {props.Option1}
                  </Nav.Link>
                  <NavDropdown
                    title="About Us"
                    id="basic-nav-dropdown"
                    className="navLinks"
                  >
                    <NavDropdown.Item href="#AboutUS" className="navLinks">
                      {props.Option2}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Blog"
                    id="basic-nav-dropdown"
                    className="navLinks"
                  >
                    <NavDropdown.Item href="#Blog" className="navLinks">
                      {props.Option3}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Pages"
                    id="basic-nav-dropdown"
                    className="navLinks"
                  >
                    <NavDropdown.Item href="#Pages" className="navLinks">
                      {props.Option4}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#Features" className="navLinks">
                    {props.Option5}
                  </Nav.Link>
                  <Nav.Link href="#ContactUs" className="navLinks">
                    {props.Option6}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className="Support d-flex">
            <div className="IconContainer">
              <RiCustomerServiceFill size={25} color="black" className="icon" />
            </div>
            <div className="ms-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: props.phone,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: props.mail,
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav7;
