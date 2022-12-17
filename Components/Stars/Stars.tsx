/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  src: string;
  tag1: string;
  Title1: string;
  Link: string;
  tag2: string;
  Title2: string;
}

function Stars(props: IProps) {
  return (
    <Container fluid className="Stars-Body">
      <Row>
        <Col>
          <img src={props.src} className="img" />
        </Col>
      </Row>
      <Row className="light-dark ">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7} className="p-0">
          <div className="light d-flex flex-column justify-content-center">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag1,
              }}
            />
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.Title1,
              }}
            />
            <a
              className="link"
              href="#"
              dangerouslySetInnerHTML={{
                __html: props.Link,
              }}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className="p-0">
          <div className="dark d-flex flex-column justify-content-start ">
            <div
              className="tag text-center mt-1 mb-1"
              dangerouslySetInnerHTML={{
                __html: props.tag2,
              }}
            />
            <div
              className="title-dark text-center"
              dangerouslySetInnerHTML={{
                __html: props.Title2,
              }}
            />
            <a
              className="link text-center mt-1 mb-1"
              href="#"
              dangerouslySetInnerHTML={{
                __html: props.Link,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Stars;
