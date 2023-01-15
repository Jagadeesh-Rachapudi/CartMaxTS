import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  title: string;
  option1: string;
  option2: string;
  option3: string;
  color: string;
}

function Hedder5(props: IProps) {
  const [active, setActive] = useState(100);
  return (
    <Container
      fluid
      className="Hedder5-Body"
      style={{ backgroundColor: props.color }}
    >
      <Row>
        <Col>
          <div className="title">ProductDetail</div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div
            onClick={() => {
              if (active == 1) setActive(100);
              else setActive(1);
            }}
            className={
              active == 1 ? "ms-2 active option me-2" : "ms-2 option me-2"
            }
          >
            {props.option1}
          </div>
          <div
            onClick={() => {
              if (active == 2) setActive(100);
              else setActive(2);
            }}
            className={
              active == 2 ? "ms-2 active option me-2" : "ms-2 option me-2"
            }
          >
            {props.option2}
          </div>
          <div
            onClick={() => {
              if (active == 3) setActive(100);
              else setActive(3);
            }}
            className={
              active == 3 ? "ms-2 active option me-2" : "ms-2 option me-2"
            }
          >
            {props.option3}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hedder5;
