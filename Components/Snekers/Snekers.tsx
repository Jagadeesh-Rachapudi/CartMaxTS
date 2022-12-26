/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlinePlayCircle } from "react-icons/ai";

export interface IProps {
  src: string;
  tag: string;
  Title: string;
  text: string;
  BUTTON: string;
  points: string[];
}

function Snekers(props: IProps) {
  return (
    <Container className="Snekers-Body mt-5 " fluid>
      <Row className="p-0">
        <Col className="p-0">
          <img src={props.src} alt="" className="img" />
          <div className="BlackCircle"></div>
          <div className="blueCircle">
            <AiOutlinePlayCircle size={50} color={"white"} className="Play" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className="p-0">
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
                __html: props.Title,
              }}
            />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            {props.points.map((e, i) => (
              <div className="dot-point d-flex flex-row mt-2" key={i}>
                <div className="dot"></div>
                <div
                  className="point"
                  dangerouslySetInnerHTML={{
                    __html: e,
                  }}
                />
              </div>
            ))}
            <button
              className="Button mt-5"
              dangerouslySetInnerHTML={{
                __html: props.BUTTON,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Snekers;
