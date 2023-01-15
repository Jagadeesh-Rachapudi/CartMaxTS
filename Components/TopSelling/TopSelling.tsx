/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  ButtonText: string;
}

function TopSelling(props: IProps) {
  return (
    <Container className="TopSelling-Body" fluid>
      <Row className="p-0">
        <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} className="p-0"></Col>
        <Col
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
          xxl={10}
          className="p-0 Col2 "
        >
          <Row>
            <Col>
              <div className="tag">JACKET & COAST</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="title">Top Selling Products</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="Container-Box">a</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TopSelling;
