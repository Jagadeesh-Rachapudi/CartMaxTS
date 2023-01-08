/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  adds: { src: string; title: string; text: string }[];
  hedding1: string;
  hedding2: string;
  tag1: string;
  tag2: string;
}
function Arrivals(props: IProps) {
  return (
    <Container className="Arrivals-Body">
      <Row className="adds ">
        {props.adds.map(
          (add: { src: string; title: string; text: string }, i) => (
            <div key={i} className="item m-3 ">
              <div className="d-flex">
                <div className="image-Container">
                  <img src={add.src} className="img" />
                </div>
                <div className="mt-auto mb-auto ms-2 ">
                  <div
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: add.title,
                    }}
                  />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: add.text,
                    }}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </Row>
      <Row>
        <Col className="container2 mt-3">
          <div className="box1">
            <div
              className="hedding"
              dangerouslySetInnerHTML={{
                __html: props.hedding1,
              }}
            />
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag1,
              }}
            />
          </div>
          <div className="box2">
            <div
              className="tag2"
              dangerouslySetInnerHTML={{
                __html: props.tag2,
              }}
            />
            <div
              className="hedding2"
              dangerouslySetInnerHTML={{
                __html: props.hedding2,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Arrivals;
