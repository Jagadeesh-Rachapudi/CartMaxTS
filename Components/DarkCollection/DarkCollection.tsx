import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

import WatchItem2, {
  IProps as WatchItem2Props,
} from "../../Utils/WatchItem2/WatchItem2";
import WatchItem2Data from "../../Utils/WatchItem2/WatchItem2.json";

export interface IProps {
  tag: string;
  title: string;
  title2: string;
  images: string[];
  by: string;
  date: string;
  text: string;
  buttontext: string;
  tag3: string;
  tag4: string;
  title3: string;
  title4: string;
  link: string;
}
function DarkCollection(props: IProps) {
  return (
    <>
      <Container className="DarkCollection-Body">
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
            <div className="Container-Box">
              {props.images.map((e, i) => (
                <div key={i} className="m-2">
                  <WatchItem2
                    {...(WatchItem2Data as WatchItem2Props)}
                    src={e}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bottom">
        <Row>
          <Col className="whitebox" xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              className="tag mb-2"
              dangerouslySetInnerHTML={{
                __html: props.tag3,
              }}
            />
            <div
              className="title mb-2"
              dangerouslySetInnerHTML={{
                __html: props.title3,
              }}
            />
            <div
              className="link"
              dangerouslySetInnerHTML={{
                __html: props.link,
              }}
            />
          </Col>
          <Col className="darkbox" xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              className="tag mb-2"
              dangerouslySetInnerHTML={{
                __html: props.tag4,
              }}
            />
            <div
              className="title2 mb-2"
              dangerouslySetInnerHTML={{
                __html: props.title4,
              }}
            />
            <div
              className="link"
              dangerouslySetInnerHTML={{
                __html: props.link,
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DarkCollection;
