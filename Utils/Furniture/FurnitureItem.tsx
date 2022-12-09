/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  tag: string;
  src: string;
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
          <img src={props.scr} className="img" />
        </Col>
      </Row>
    </Container>
  );
}

export default FurnitureItem;
