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
import { IStore } from "../../redux/store";
import { countAndRemoveDuplicates } from "../../public/functions";

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

  const cartProducts = useSelector((state: IStore) => state.cart.products);
  console.log(cartProducts);

  let resutls = countAndRemoveDuplicates(cartProducts);

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
                {cartProducts.map((e, i) => (
                  <div key={i}>{e.productName}</div>
                ))}
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
