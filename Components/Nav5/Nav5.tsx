import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export interface IProps {
  src: string;
  navOptions: { text: string; link: string }[];
  cartitems: string[];
  whishList: string[];
  Hedder: string;
  text: string;
  buttonText: string;
}

function Nav5(props: IProps) {
  const [number, setNumber] = useState();
  return (
    <div className="Nav5-Body">
      <Container fluid="xl">
        <Row className="d-flex flex-row justify-content-evenly">
          <Col className="navbar2">
            <Navbar
              bg="light"
              variant="dark"
              expand="lg"
              className="bg-transparent nav-Links nav2  "
            >
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className="Nav-Link">
                      Home
                    </Nav.Link>
                    <NavDropdown
                      title="About Us"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#About Us">
                        About Us
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Blog"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Blog">Blog</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Pages"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Pages">Pages</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Features" className="Nav-Link">
                      Features
                    </Nav.Link>
                    <Nav.Link href="#ContactUS" className="Nav-Link">
                      ContactUS
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="DropDownButton">
                <AiOutlineMenu className="me-2" />
                SHOP BY DEPARTMENT
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Best Seller Products
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Top 10 Offers
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  New Arrivals
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Phone & Tablets
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Electronics & Digital
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Fashion & Clothings
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Jewelry & Watches
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Heath & Beauty
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  TV & Audio
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Sound & Speaker
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Gadgets
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Toys & Hobbies
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Heath & Beauty
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Asus
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Acessories
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="DropDown-Link d-flex flex-row "
                >
                  <div className="dot mt-auto mb-auto me-2 "></div>
                  Art & Craft
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex flex-row navOptions p-0 nav1 ">
            <Navbar
              bg="light"
              variant="dark"
              expand="lg"
              className="bg-transparent nav-Links "
            >
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className="Nav-Link">
                      Home
                    </Nav.Link>
                    <NavDropdown
                      title="About Us"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#About Us">
                        About Us
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Blog"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Blog">Blog</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Pages"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Pages">Pages</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Features" className="Nav-Link">
                      Features
                    </Nav.Link>
                    <Nav.Link href="#ContactUS" className="Nav-Link">
                      ContactUS
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col className="mt-3 hotline ">
            <div className="d-flex ">
              <AiOutlineBell size={20} color="white" className="" />
              <div className="Hedding">
                <b>Hotline:</b>
              </div>
              <div className="number ms-2">(+100) 123 456 7890</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav5;
