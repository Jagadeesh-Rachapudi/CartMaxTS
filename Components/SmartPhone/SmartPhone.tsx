/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Gadget, { IProps as GadgetProps } from "../../Utils/Gadget/Gadget";
import GadgetData from "../../Utils/Gadget/Gadget.json";

export interface IProps {
  title: string;
  add1: string;
  add2: string;
  options: string[];
  products: {
    src: string;
    title: string;
    price1: number;
    price2: number;
    id: number;
  }[];
}

function SmartPhone(props: IProps) {
  const [active, setActive] = useState(100);
  return (
    <Container className="SmartPhone-Body" fluid="xl">
      <Row>
        <Col className="d-flex">
          <div className="add">
            <img src={props.add1} alt="" className="addimg" />
          </div>
          <Container fluid="xl">
            <Row>
              <Col className=" title-box  d-flex justify-content-between">
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: props.title,
                  }}
                />
                <div className="options mt-auto mb-auto d-flex">
                  {props.options.map((e, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        if (active == i) setActive(100);
                        else setActive(i);
                      }}
                      className={
                        active == i
                          ? "ms-2 option me-2 active"
                          : "ms-2 option me-2"
                      }
                      dangerouslySetInnerHTML={{
                        __html: e,
                      }}
                    />
                  ))}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="Container-Box">
                  {props.products.map(
                    (
                      product: {
                        src: string;
                        title: string;
                        price1: number;
                        price2: number;
                        id: number;
                      },
                      i
                    ) => (
                      <Gadget
                        key={i}
                        {...(GadgetData as unknown as GadgetProps)}
                        src={product.src}
                        title={product.title}
                        price1={product.price1}
                        price2={product.price2}
                        prodid={product.id}
                      />
                    )
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={props.add2} alt="" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default SmartPhone;
