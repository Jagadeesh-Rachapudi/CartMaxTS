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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FDotted-Img.png?alt=media&token=78f6c241-c7e5-4d3d-af94-433ff8974a24"
            className="img"
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-row" >
            
        </Col>
      </Row>
    </Container>
  );
}
``;
export default Stars;
