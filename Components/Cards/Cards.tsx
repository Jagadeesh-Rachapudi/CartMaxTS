/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export interface IProps {
  tag: string;
  title: string;
  RandomImage: string;
}
function Cards(props: IProps) {
  return (
    <Container className="Cards-Body pt-3 pb-3">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6}>
          <div className="content  d-flex flex-column ">
            <div
              className="title mb-3"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <img src={props.RandomImage} alt="" className="img rounded" />
            <a
              href=""
              className="mt-3 Link"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
          </div>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12} xxl={6}>
          <div className=" mt-5 content d-flex flex-column ">
            <a
              href=""
              className="mt-3 Link"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <img src={props.RandomImage} alt="" className="img rounded" />
            <div
              className="title mb-3"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
