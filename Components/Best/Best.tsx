/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Gadget, { IProps as GadgetProps } from "../../Utils/Gadget/Gadget";
import GadgetData from "../../Utils/Gadget/Gadget.json";

export interface IProps {
  elements: { src: string; title: string; text: string }[];
  products: {
    src: string;
    title: string;
    price1: number;
    price2: number;
    id: number;
  }[];
  title: string;
  view: string;
  add1: string;
  add2: string;
  add3: string;
}

function Best(props: IProps) {
  return (
    <Container className="Best-Body" fluid="md">
      <Row>
        <Col className="Container-Box">
          {props.elements.map(
            (element: { src: string; title: string; text: string }, i) => (
              <div className="box m-3" key={i}>
                <div className="img-box">
                  <img src={element.src} alt="" className="img me-3 " />
                </div>
                <div>
                  <div className="title"></div>
                  <div
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: element.title,
                    }}
                  />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: element.text,
                    }}
                  />
                </div>
              </div>
            )
          )}
        </Col>
      </Row>
      <Row>
        <Col className=" mt-5 d-flex justify-content-between">
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <a
            className="mt-auto mb-auto"
            dangerouslySetInnerHTML={{
              __html: props.view,
            }}
          />
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
      <Row>
        <Col>
          <div className="Adds">
            <img className="Add1" src={props.add1} />
            <img className="Add2" src={props.add2} />
            <img className="Add3" src={props.add3} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Best;
