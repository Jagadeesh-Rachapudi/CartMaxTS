import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RxDotFilled } from "react-icons/rx";
import FurnitureItem, {
  IProps as FurnitureItemProps,
} from "../../Utils/Furniture/FurnitureItem";
import FurnitureData from "../../Utils/Furniture/FurnitureItem.json";

export interface IProps {
  options: string[];
  products: string[];
  tag: string;
  title: string;
}

function YearBest(props: IProps) {
  const [active, setActive] = useState(0);
  return (
    <div className="YearBest-Body pt-5 ">
      <Container fluid="lg">
        <Row>
          <Col>
            <div
              className="tagh  ms-1"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column flex-md-row">
            <div
              className="title mt-auto mb-auto"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="options">
              {props.options.map((str, id) => (
                <a
                  key={id}
                  onClick={() => {
                    if (active == id) setActive(100);
                    else setActive(id);
                  }}
                  className={`${active == id ? "active link" : " link "}`}
                >
                  <RxDotFilled
                    color={`${active == id ? "#F76954" : "#171515"}`}
                    size={20}
                    className="mt-0 mb-1"
                  />
                  {str}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className=" products-container d-flex mb-5 flex-row justify-content-center g-1  ">
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
    </div>
  );
}

export default YearBest;
