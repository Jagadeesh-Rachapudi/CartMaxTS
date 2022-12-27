import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export interface IProps {
  tag: string;
  title: string;
  products: string[];
  viewAll: string;
}

function Yourself(props: IProps) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="tag"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Yourself;
