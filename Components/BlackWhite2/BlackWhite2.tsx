/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  images1: string[];
  images2: string[];
  comment: string;
  text: string;
  avatar: string;
}

function BlackWhite2(props: IProps) {
  return (
    <Container className="BlackWite2Body" fluid>
      <Row className="p-0">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
          className="p-0 Black "
        >
          <Row className="Row1 pe-1 me-5 ">
            {props.images1.map((e, i) => (
              <img key={i} src={e} alt="" className=" m-2 " />
            ))}
          </Row>
          <Row className="Row2 pe-1 me-5">
            {props.images2.map((e, i) => (
              <img key={i} src={e} alt="" className=" m-2 " />
            ))}
          </Row>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
          className="p-0 White "
        >
          <div className="avatar-comment d-flex flex-row">
            <img src={props.avatar} alt="" />
            <div
              className="comment ms-4 "
              dangerouslySetInnerHTML={{
                __html: props.comment,
              }}
            />
          </div>
          <div
            className="text  "
            dangerouslySetInnerHTML={{
              __html: props.text,
            }}
          />
          <div className=" tag mt-5 ms-5">
            <span>JONT NICOLIN KOOK</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlackWhite2;
