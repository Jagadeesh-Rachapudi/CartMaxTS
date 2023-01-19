/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export interface IProps {
  src: string;
  title: string;
}

function DisplayCard(props: IProps) {
  return (
    <Container className="DisplayCard-Body">
      <Row>
        <Col className="d-flex">
          <div className="img-container">
            <img src={props.src} alt="" className="img" />
          </div>
          <div
            className="Cardtitle"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DisplayCard;
