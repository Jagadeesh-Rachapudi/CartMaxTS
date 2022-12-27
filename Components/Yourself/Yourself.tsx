import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ShoesItem, {
  IProps as ShoesItemProps,
} from "../../Utils/ShoesItem/ShoesItem";
import ShoesItemsData from "../../Utils/ShoesItem/ShoesItem.json";

export interface IProps {
  tag: string;
  title: string;
  products: string[];
  viewAll: string;
}

function Yourself(props: IProps) {
  const [active, setActive] = useState("");
  return (
    <Container className="Yourself-Body">
      <Row>
        <Col>
          <span className="tag">Students Now Get 10% Off</span>
        </Col>
      </Row>
      <Row>
        <Col className="Title-Options d-flex flex-row ">
          <div className="Title">Treat Yourself to Sport</div>
          <div className="Options">
            <div
              className={
                active === "1" ? "Option active me-2 " : " Option me-2"
              }
              onClick={() => {
                if (active === "1") setActive("");
                else setActive("1");
              }}
            >
              New Arrival{" "}
            </div>
            <div
              className={
                active === "2" ? "Option me-2 active " : " Option me-2 "
              }
              onClick={() => {
                if (active === "2") setActive("");
                else setActive("2");
              }}
            >
              Best Sellers
            </div>
            <div
              className={
                active === "3" ? "Option me-2 active " : " Option me-2 "
              }
              onClick={() => {
                if (active === "3") setActive("");
                else setActive("3");
              }}
            >
              Best Sellers
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Container-Box">
            <div className="shoesItemBox mt-3">
              <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
            </div>
            <div className="mt-3">
              <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
            </div>
            <div className="mt-3">
              <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="Shoes">
        <Col>aaaa</Col>
      </Row>
    </Container>
  );
}

export default Yourself;
