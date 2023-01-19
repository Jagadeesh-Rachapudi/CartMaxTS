/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  src: string;
  title2: string;
  price: string;
}

function Picks(props: IProps) {
  return (
    <Container className="Picks-Body">
      <Row>
        <Col className="d-flex">
          <img src={props.src} alt="" className="img" />
          <div>
            <div
              className="title2"
              dangerouslySetInnerHTML={{
                __html: props.title2,
              }}
            />
            <div
              className="price"
              dangerouslySetInnerHTML={{
                __html: props.price,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Picks;
