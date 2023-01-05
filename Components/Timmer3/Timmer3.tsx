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
  src: string;
  DropDownktext: string;
  Option1: string;
  Option2: string;
  Search: string;
  Cart: string;
  Price: string;
  dummy: string[];
}

function Timmer3(props: IProps) {
  return (
    <Container className="Timmer3-Body">
      <Row>
        <Col>
          <div className="tag">Hot Categories</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="title">Deals of the Week</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Container-Box">
            {props.dummy.map((e) => (
              <div key={e} className="m-2">
                <Deals {...(DealsData as DealProps)} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Timmer3;
