/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export interface IProps {
  src1: string;
  src2: string;
  title: string;
  text: string;
  dummy: string[];
}

function Review(props: IProps) {
  return (
    <Container className="Review-Body">
      <Carousel variant="dark">
        {props.dummy.map((e, i) => (
          <Carousel.Item key={i}>
            <Row>
              <Col>
                <img src={props.src1} alt="" className="colon" />
                <div className="img-Container">
                  <img src={props.src2} alt="" className="img" />
                </div>
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
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: props.text,
                  }}
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Review;
