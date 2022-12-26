/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export interface IProps {
  src: string;
  name: string;
}

function ShoesOnDisplay(props: IProps) {
  return (
    <Container className="ShoesOnDisplay-Body" fluid>
      <Row className="image-body">
        <img src={props.src} alt="" className="img" />
      </Row>
      <Row>
        <Col>
          <div
            className="name mt-2"
            dangerouslySetInnerHTML={{
              __html: props.name,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ShoesOnDisplay;
