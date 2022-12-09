/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsHeart, BsBag } from "react-icons/bs";

export interface IProps {
  tag: string;
  src: string;
  title: string;
  price: string;
}
function FurnitureItem(props: IProps) {
  return (
    <Container fluid className="FurnitureItem-Body d-block ">
      <Row>
        <Col>
          <div
            className="tag"
            dangerouslySetInnerHTML={{
              __html: `${props.tag}`,
            }}
          />
          <div className="wishlist">
            <BsHeart size={20} className="me-2" />
            <>Whishlist</>
          </div>
          <div className="cart">
            <BsBag size={20} color="white" className="me-2" />
            <>Add To Cart</>
          </div>
          <div className="img-container">
            <img src={`${props.src}`} className="img" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="title-color d-flex flex-row justify-content-between mt-2 ">
            <div className="product-title">{props.title}</div>
            <div className="colors d-flex flex-row mt-auto mb-auto">
              <div className="color1 me-1 ms-1"></div>
              <div className="color2 me-2 ms-1"></div>
              <div className="color3 me-1 ms-1"></div>
              <div className="color4 me-1 ms-1"></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="price mt-2"
            dangerouslySetInnerHTML={{
              __html: props.price,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default FurnitureItem;
