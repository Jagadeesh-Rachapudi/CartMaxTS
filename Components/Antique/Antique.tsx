/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TransButton from "../../Utils/TransButton/TransButton";
import Carousel from "react-bootstrap/Carousel";
import GoldCard from "../../Utils/GoldCard/GoldCard";
import { useState } from "react";

export interface IProps {
  chain: string;
  carousel: string[];
  tag1: string;
  title1: string;
  tag2: string;
  title2: string;
  text: string;
  buttontext1: string;
  buttontext2: string;
  options: string[];
  products: {
    src: string;
    Cardtag: string;
    Cardtitle: string;
    price: string;
    prodid: number;
  }[];
  leaves: string;
}
function Antique(props: IProps) {
  const [active, setActive] = useState(100);
  return (
    <div className="Antique-Body">
      <Container fluid>
        <Row className="p-0">
          <Col className="p-0">
            <div className="rosebox d-flex">
              <img src={props.chain} alt="" className="img" />
              <div>
                <Carousel fade className="Carousel-Body">
                  {props.carousel.map((e, i) => (
                    <Carousel.Item key={i}>
                      <div className="image">
                        <img src={e} alt="" className="randomImg" />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="content">
                <div
                  className="tag"
                  dangerouslySetInnerHTML={{
                    __html: props.tag1,
                  }}
                />
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: props.title1,
                  }}
                />
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: props.text,
                  }}
                />
                <div className="Button-Container">
                  <TransButton color="black" text={props.buttontext1} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <img src={props.leaves} alt="" className="leaves" />
      </div>
      <Container className="BestSeller">
        <Row>
          <Col>
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag2,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="title-container">
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title2,
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
    </div>
  );
}

export default Antique;
