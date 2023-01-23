/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fashion, { IProps as FashionProps } from "../../Utils/Fashion/Fashion";
import FashionData from "../../Utils/Fashion/Fashion.json";

export interface IProps {
  tag: string;
  title: string;
  options: string[];
  products: {
    id: number;
    fashionttile: string;
    price: number;
    color1: string;
    color2: string;
  }[];
}

function Summer(props: IProps) {
  const [active, setActive] = useState(-1);
  return (
    <Container fluid className="Summer-Body">
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
        <Col className="title-container">
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <div className="options">
            {props.options.map((e, i) => (
              <div
                key={i}
                className={active === i ? "active option" : "option"}
                onClick={() => {
                  if (active === i) setActive(-1);
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
            {props.products.map(
              (
                product: {
                  id: number;
                  fashionttile: string;
                  price: number;
                  color1: string;
                  color2: string;
                },
                i
              ) => (
                <div key={i}>
                  <Fashion
                    {...(FashionData as FashionProps)}
                    fashionttile={product.fashionttile}
                    price={product.price}
                    color1={product.color1}
                    color2={product.color2}
                    prodid={product.id}
                  />
                </div>
              )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Summer;
