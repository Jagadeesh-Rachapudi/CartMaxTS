/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { BsBag } from "react-icons/bs";

import Deals, { IProps as DealProps } from "../../Utils/Deals/Deals";
import DealsData from "../../Utils/Deals/Deals.json";

export interface IProps {
  tag: string;
  title: string;
  dummy: string[];
  src: string;
}

function Timmer3(props: IProps) {
  return (
    <Container className="Timmer3-Body">
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
          <div className="Container-Box mb-5 ">
            {props.dummy.map((e) => (
              <div key={e} className="m-2">
                <Deals {...(DealsData as DealProps)} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={props.src} alt="" className=" mt-5 w-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default Timmer3;
