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
  Home: string;
  AboutUS: string;
  Blog: string;
  Pages: string;
  Features: string;
  ContactUS: string;
  DopDownName: string;
  DropDownLinks: string[];
  Hotline: string;
  Number: string;
}

function Nav5(props: IProps) {
  const [number, setNumber] = useState();
  return (
    <div className="Nav5-Body">
      <Container fluid="xl">
        <Row className="d-flex flex-row justify-content-between">
          <Col
            className="navbar2 nav2"
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={1}
            xxl={1}
          >
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
                      {props.Home}
                    </Nav.Link>
                    <NavDropdown
                      title="About Us"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#About Us">
                        {props.AboutUS}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Blog"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Blog">
                        {props.Blog}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Pages"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Pages">
                        {props.Pages}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Features" className="Nav-Link">
                      {props.Features}
                    </Nav.Link>
                    <Nav.Link href="#ContactUS" className="Nav-Link">
                      {props.ContactUS}
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col className="col2">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="DropDownButton">
                <AiOutlineMenu className="me-2" />
                {props.DopDownName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {props.DropDownLinks.map((e, i) => (
                  <Dropdown.Item
                    href="#"
                    key={i}
                    className="DropDown-Link d-flex flex-row "
                  >
                    <div className="dot mt-auto mb-auto me-2 "></div>
                    {e}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex flex-row navOptions p-0 nav1 ">
            <Navbar
              bg="light"
              variant="dark"
              expand="lg"
              className="bg-transparent nav-Links nav1  "
            >
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className="Nav-Link">
                      {props.Home}
                    </Nav.Link>
                    <NavDropdown
                      title="About Us"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#About Us">
                        {props.AboutUS}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Blog"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Blog">
                        {props.Blog}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Pages"
                      id="basic-nav-dropdown"
                      className="Nav-Link"
                    >
                      <NavDropdown.Item href="#Pages">
                        {props.Pages}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Features" className="Nav-Link">
                      {props.Features}
                    </Nav.Link>
                    <Nav.Link href="#ContactUS" className="Nav-Link">
                      {props.ContactUS}
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
                <b>{props.Hotline}</b>
              </div>
              <div className="number ms-2">{props.Number}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav5;
