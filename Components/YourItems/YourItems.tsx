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
  products: string[];
  viewAll: string;
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
        <Col>
          <div
            className="viewAll"
            dangerouslySetInnerHTML={{
              __html: props.viewAll,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className=" products-container d-flex mb-5 flex-row justify-content-center g-1 ">
          {props.products.map((e, id) => (
            <div key={id} className="mt-2 me-1 ms-1">
              <FurnitureItem
                {...(FurnitureData as FurnitureItemProps)}
                title={e}
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default YourItems;
