/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import TransButton from "../../Utils/TransButton/TransButton";
import GoldCard from "../../Utils/GoldCard/GoldCard";

export interface IProps {
  img1: string;
  img2: string;
  img3: string;
  tag: string;
  title: string;
  text: string;
  options: string[];
  products: {
    src: string;
    Cardtag: string;
    Cardtitle: string;
    price: string;
    prodid: number;
  }[];
  buttontext1: string;
  buttontext2: string;
}
function Popular2(props: IProps) {
  const [active, setActive] = useState(100);
  return (
    <Container className="Popular2-Body" fluid>
      <Row className="p-0">
        <Col className="p-0">
          <img src={props.img1} alt="" className="img1" />
          <img src={props.img2} alt="" className="img2" />
          <img src={props.img3} alt="" className="img3" />
        </Col>
      </Row>

      <Container fluid>
        <Row>
          <Col>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="Button-Container">
              <TransButton text={props.buttontext1} color="black" />
            </div>
          </Col>
        </Row>
      </Container>
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
                  onClick={() => {
                    if (active == i) setActive(100);
                    else setActive(i);
                  }}
                  className={
                    active == i
                      ? "ms-2 option me-2 active "
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
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="Container-Box">
              {props.products.map(
                (
                  product: {
                    src: string;
                    Cardtag: string;
                    Cardtitle: string;
                    price: string;
                    prodid: number;
                  },
                  i
                ) => (
                  <div key={i}>
                    <GoldCard
                      src={product.src}
                      Cardtag={product.Cardtag}
                      Cardtitle={product.Cardtitle}
                      price={product.price}
                      prodid={product.prodid}
                    />
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Button-Container">
              <TransButton text={props.buttontext2} color="black" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Popular2;
