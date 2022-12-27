import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ShoesItem, {
  IProps as ShoesItemProps,
} from "../../Utils/ShoesItem/ShoesItem";
import ShoesItemsData from "../../Utils/ShoesItem/ShoesItem.json";

export interface IProps {
  title: string;
  Option1: string;
  Option2: string;
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
          <div
            className="Title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <div className="Options">
            <div
              className={
                active === "1" ? "Option active me-2 " : " Option me-2"
              }
              onClick={() => {
                if (active === "1") setActive("");
                else setActive("1");
              }}
              dangerouslySetInnerHTML={{
                __html: props.Option1,
              }}
            />
            <div
              className={
                active === "2" ? "Option me-2 active " : " Option me-2 "
              }
              onClick={() => {
                if (active === "2") setActive("");
                else setActive("2");
              }}
              dangerouslySetInnerHTML={{
                __html: props.Option2,
              }}
            />
            <div
              className={
                active === "3" ? "Option me-2 active " : " Option me-2 "
              }
              onClick={() => {
                if (active === "3") setActive("");
                else setActive("3");
              }}
              dangerouslySetInnerHTML={{
                __html: props.Option2,
              }}
            />
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
    </Container>
  );
}

export default Yourself;
