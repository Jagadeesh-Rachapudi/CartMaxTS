/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MarketItem, {
  IProps as MarketItemProps,
} from "../../Utils/MarketItem/MarketItem";
import MarketItemData from "../../Utils/MarketItem/MarketItem.json";

export interface IProps {
  tag: string;
  title: string;
  view: string;
  add1: string;
  add2: string;
  add3: string;
  dummy: number[];
}

function Categories2(props: IProps) {
  return (
    <Container className="Categories2-Body">
      <Row>
        <Col xs={10} sm={10} lg={10} md={10} xl={10} xxl={10}>
          <div className="Content">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div className="d-flex mt-3 ">
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: props.title,
                }}
              />
              <a
                href="#"
                className="View mt-auto mb-auto"
                dangerouslySetInnerHTML={{
                  __html: props.view,
                }}
              />
            </div>
            <div className="Container-Box">
              {props.dummy.map((i) => (
                <div className="item" key={i}>
                  <MarketItem {...(MarketItemData as MarketItemProps)} />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col xs={2} sm={2} lg={2} md={2} xl={2} xxl={2}>
          <img src={props.add1} alt="" className="img2" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <img src={props.add2} alt="" className="img3 me-5 " />
          <img src={props.add3} alt="" className="img4" />
        </Col>
      </Row>
    </Container>
  );
}

export default Categories2;
