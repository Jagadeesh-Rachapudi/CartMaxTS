/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import GoldButton from "../../Utils/GoldButton/GoldButton";

export interface IProps {
  src: string;
  tag1: string;
  tag2: string;
  name: string;
  price: string;
  text: string;
  title: string;
  buttonText: string;
  dummy: string[];
}

function Hedder4(props: IProps) {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Container fluid className="Hedder4-Body">
        <Row className="p-0">
          <Col
            className="p-0 col1"
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <Carousel className="ms-5">
              {props.dummy.map((e, i) => (
                <Carousel.Item key={i}>
                  <div className="content">
                    <img src={props.src} alt="" className="img" />
                    <div
                      className="tag"
                      dangerouslySetInnerHTML={{
                        __html: props.tag1,
                      }}
                    />
                    <div
                      className="name"
                      dangerouslySetInnerHTML={{
                        __html: props.name,
                      }}
                    />
                    <div
                      className="price"
                      dangerouslySetInnerHTML={{
                        __html: props.price,
                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col
            className="p-0 col2 "
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <div className="ms-auto Black-Button">
              <div className=" ms-auto BlackBox">
                <div
                  className="tag"
                  dangerouslySetInnerHTML={{
                    __html: props.tag2,
                  }}
                />
                <div
                  className="title mt-3"
                  dangerouslySetInnerHTML={{
                    __html: props.title,
                  }}
                />
                <div
                  className="text mt-3"
                  dangerouslySetInnerHTML={{
                    __html: props.text,
                  }}
                />
                <div className="mt-5">
                  <GoldButton text={props.buttonText} />
                </div>
              </div>
            </div>
            <div className="buttons">
              <div
                onClick={() => {
                  if (active == 1) setActive(2);
                  else setActive(1);
                }}
                className={`${active == 1 ? "button2 border2 " : "button3"}`}
              >
                <div>
                  <HiArrowSmLeft className="left" size={50} />
                </div>
              </div>
              <div
                onClick={() => {
                  if (active == 2) setActive(1);
                  else setActive(2);
                }}
                className={`${active == 2 ? "button2" : "button1"}`}
              >
                <div>
                  <HiArrowSmRight className="right" size={50} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hedder4;
