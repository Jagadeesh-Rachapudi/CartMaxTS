/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SlCalender } from "react-icons/sl";

export interface IProps {
  img: string;
  face: string;
  by: string;
  date: string;
  name: string;
}

function NewsArticle3(props: IProps) {
  return (
    <Container className="NewsArticle3-Body">
      <Row className="p-0">
        <Col className="p-0">
          <img src={props.img} alt="" className="img rounded" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex mb-3">
          <img src={props.face} alt="" className="face ms-2" />
          <div className="d-flex mt-auto mb-auto ms-2">
            <div
              className="by"
              dangerouslySetInnerHTML={{
                __html: props.by,
              }}
            />
            <>
              <SlCalender size={13} color="black" className="mt-1 ms-2 me-2" />
            </>
            <div
              className="date"
              dangerouslySetInnerHTML={{
                __html: props.date,
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="name ms-2"
            dangerouslySetInnerHTML={{
              __html: props.name,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default NewsArticle3;
