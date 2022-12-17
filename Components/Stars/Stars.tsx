/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  options: string[];
  products: string[];
  tag: string;
  title: string;
}

function Stars() {
  return (
    <Container fluid className="Stars-Body">
      <Row>
        <Col>
          <img src="" className="img" />
        </Col>
      </Row>
      <Row className="light-dark ">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7} className="p-0">
          <div className="light d-flex flex-column justify-content-center">
            <div className="tag">JACKET & COAST</div>
            <div className="title ">Free Shipping Over Order $290</div>
            <a href="#" className="link">
              Shop Now
            </a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className="p-0">
          <div className="dark d-flex flex-column justify-content-start ">
            <div className="tag text-center mt-1 mb-1">UP TO 30% OFF TODAY</div>
            <div className="title-dark text-center ">Spring Collection</div>
            <a href="#" className="link text-center mt-1 mb-1">
              Shop Now
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Stars;
