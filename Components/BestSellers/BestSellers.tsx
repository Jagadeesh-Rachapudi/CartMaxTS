/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import SpecialOffer, {
  IProps as SpecialOfferProps,
} from "../../Utils/SpecialOffer/SpecialOffer";
import SpecialOfferData from "../../Utils/SpecialOffer/SpecialOffer.json";

export interface IProps {
  tag: string;
  title: string;
  dummy: string[];
  dummy2: string[];
  adds: string[];
}

function BestSellers(props: IProps) {
  return (
    <div className="BestSellers-Body">
      <Container>
        <Row>
          <Col>
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
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
            <div className="Container-Box">
              {props.dummy.map((i) => (
                <div key={i}>
                  <SpecialOffer {...(SpecialOfferData as SpecialOfferProps)} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Card className="cards  ">
              <div className="m-auto adds ">
                {props.adds.map((e, i) => (
                  <img key={i} src={e} alt="" className="img" />
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className=" container2 mt-5" fluid>
        <Row>
          <Col>
            <div className="title">Recently Viewed Products</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Container-Box">
              {props.dummy2.map((i) => (
                <div key={i}>
                  <SpecialOffer {...(SpecialOfferData as SpecialOfferProps)} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BestSellers;
