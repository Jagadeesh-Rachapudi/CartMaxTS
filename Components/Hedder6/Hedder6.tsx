/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { BsSearch, BsPerson, BsHeart, BsBag } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import Carousel from "react-bootstrap/Carousel";

export interface IProps {
  src: string;
  text1: string;
  text2: string;
  Categories: string;
  Department: string;
  title: string;
  tag: string;
  price: string;
  buttontext: string;
  options: string[];
  dummy1: string[];
  dummy2: string[];
}

function Hedder6(props: IProps) {
  return (
    <div>
      <Container className="Hedder6-Search" fluid="lg">
        <Row>
          <Col className="d-flex justify-content-between searchcontainer ">
            <div className="d-flex">
              <div className="megaphone-Container">
                <img src={props.src} alt="" className="megaphone" />
              </div>
              <div className="text ms-2">
                <div
                  className="text1 mb-1"
                  dangerouslySetInnerHTML={{
                    __html: props.text1,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.text2,
                  }}
                />
              </div>
            </div>
            <div className="search">
              <form className="d-flex">
                <input type="search" name="txt" placeholder="Search Products" />
                <div className="dropdown">
                  <Dropdown>
                    <Dropdown.Toggle className="dd-button" id="dropdown-basic">
                      {props.Categories}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {props.dummy2.map((e, i) => (
                        <Dropdown.Item key={i}>{e}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <button className="Button" type="submit">
                  <BsSearch color="white" size={25} />
                </button>
              </form>
            </div>
            <div className="Righticons">
              <div className="ms-1 icon-container me-1">
                <BsPerson color="black" size={20} className="icon" />
              </div>
              <div className="ms-1 icon-container me-1">
                <BsHeart color="black" size={20} className="icon" />
              </div>
              <div className="ms-1 icon-container me-1">
                <BsBag color="black" size={20} className="icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="Hedder6-Body" fluid>
        <Container fluid="md">
          <Row>
            <Col className="hedder-box">
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle className="ddButton" id="dropdown-basic">
                    <div className="me-2">
                      <BiCoinStack color="black" size={17} className="icon" />
                    </div>
                    {props.Department}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {props.options.map((e, i) => (
                      <Dropdown.Item key={i}>{e}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="hedder-content">
                <Carousel variant="dark">
                  {props.dummy1.map((e, i) => (
                    <Carousel.Item key={i}>
                      <div className="content" key={i}>
                        <div
                          className="tag mb-2"
                          dangerouslySetInnerHTML={{
                            __html: props.tag,
                          }}
                        />
                        <div
                          className="title mb-2"
                          dangerouslySetInnerHTML={{
                            __html: props.title,
                          }}
                        />
                        <div
                          className="price mb-2"
                          dangerouslySetInnerHTML={{
                            __html: props.price,
                          }}
                        />
                        <button
                          className="Button"
                          dangerouslySetInnerHTML={{
                            __html: props.buttontext,
                          }}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Hedder6;
