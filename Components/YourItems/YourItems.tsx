import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FurnitureItem, {
  IProps as FurnitureItemProps,
} from "../../Utils/Furniture/FurnitureItem";
import FurnitureData from "../../Utils/Furniture/FurnitureItem.json";

export interface IProps {
  tag: string;
  title: string;
}
function YourItems(props: IProps) {
  return (
    <Container fluid className="YourItems-Body">
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <div
            className="htag"
            dangerouslySetInnerHTML={{
              __html: `${props.tag}`,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-row justify-content-center">
          <FurnitureItem {...(FurnitureData as FurnitureItemProps)} />
        </Col>
      </Row>
    </Container>
  );
}

export default YourItems;
