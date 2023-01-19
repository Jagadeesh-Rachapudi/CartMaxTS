/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Gadget, { IProps as GadgetProps } from "../../Utils/Gadget/Gadget";
import GadgetData from "../../Utils/Gadget/Gadget.json";

export interface IProps {
  title: string;
  options: string[];
  products: {
    src: string;
    title: string;
    price1: number;
    price2: number;
    id: number;
  }[];
  add: string;
}

function Sellers(props: IProps) {
  const [active, setActive] = useState(100);

  return (
    <Container className="Sellers-Body" fluid="lg">
      <Row>
        <Col className="title-box">
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <div className="options mt-auto mb-auto">
            {props.options.map((e, i) => (
              <div
                key={i}
                className={active === i ? "active option " : "option"}
                onClick={() => {
                  if (active === i) setActive(100);
                  else setActive(i);
                }}
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
            <img src={props.add} alt="" className="add" />
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
  );
}

export default Sellers;
