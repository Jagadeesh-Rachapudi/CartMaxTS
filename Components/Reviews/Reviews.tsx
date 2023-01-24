/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaQuoteLeft } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

export interface IProps {
  tag: string;
  title: string;
  randomimage1: string;
  randomimage2: string;
  randomimage3: string;
  name: string;
  text: string;
  dummy: string[];
}

function Reviews(props: IProps) {
  return (
    <Container className="Reviews-Body" fluid="xl">
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="images">
          <img src={props.randomimage1} alt="" className="img1 rounded" />
          <img src={props.randomimage2} alt="" className="img2 rounded" />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className="content">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="ms-3 Quotes">
              <FaQuoteLeft size={30} />
            </div>
            <div className="d-flex ms-4 mt-3">
              <img src={props.randomimage3} alt="" className="rounded" />
              <div className="name-stars mt-auto mb-auto ms-4">
                <div
                  className="name"
                  dangerouslySetInnerHTML={{
                    __html: props.name,
                  }}
                />
                {props.dummy.map((e, i) => (
                  <AiTwotoneStar color="#FFB129" key={i} />
                ))}
              </div>
            </div>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
