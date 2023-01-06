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
    <Container className="Categories2-Body" fluid="xxl">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={10} xxl={10}>
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
        <Col
          xs={0}
          sm={0}
          lg={0}
          md={0}
          xl={2}
          xxl={2}
          className="img2-container"
        >
          <a href="#">
            <img src={props.add1} alt="" className="img2" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="images-container d-flex">
            <a href="#">
              <img src={props.add2} alt="" className="img3 me-5 " />
            </a>
            <a href="#">
              <img src={props.add3} alt="" className="img4" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories2;
