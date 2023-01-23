/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";

export interface IProps {
  sale: string;
  hot: string;
  img: string;
  cart: string;
  price1: string;
  fashionttile: string;
  color1: string;
  color2: string;
  price: number;
  prodid: number;
}

function Fashion(props: IProps) {
  return (
    <Container className="Fashion-Body m-2">
      <Row>
        <Col>
          <div className="overflow-icons">
            <div>
              <div
                className="sale"
                dangerouslySetInnerHTML={{
                  __html: props.sale,
                }}
              />
              <div
                className="hot"
                dangerouslySetInnerHTML={{
                  __html: props.hot,
                }}
              />
            </div>
            <div className="icons-container">
              <div className="icons">
                <BsSearch color="black" size={17} className="icon" />
              </div>
              <div className="icons">
                <BsHeart color="black" size={17} className="icon" />
              </div>
            </div>
          </div>
          <div className="showOnHover">
            <img src={props.img} alt="" className="img" />
            <div className="cart">
              <div className="ms-auto me-auto d-flex mt-3">
                <BsBag color="white" size={17} className="bagicon mt-1" />
                <div
                  className="ms-2"
                  dangerouslySetInnerHTML={{
                    __html: props.cart,
                  }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="Fashion-title mt-2 ms-2"
            dangerouslySetInnerHTML={{
              __html: props.fashionttile,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex mt-2 ms-2">
            <div
              className="price1"
              dangerouslySetInnerHTML={{
                __html: props.price1,
              }}
            />
            <div className="price">{props.price}$</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex mt-1 ms-2">
            <div className="color1" style={{ backgroundColor: props.color1 }} />
            <div
              className="ms-2 color2"
              style={{ backgroundColor: props.color2 }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Fashion;
