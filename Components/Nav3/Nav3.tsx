import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  src: string;
}

function Nav3(props: IProps) {
  return (
    <div className="Nav3-Body">
      <Container>
        <Row>
          <Col>aaaaaa</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav3;
