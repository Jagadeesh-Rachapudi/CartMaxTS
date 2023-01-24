/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPlayCircle } from "react-icons/bs";

export interface IProps {
  title: string;
  banner: string;
}

function Play(props: IProps) {
  return (
    <Container className="Play-Body p-0" fluid>
      <Row>
        <Col>
          <Container fluid className="Play-Box">
            <Row>
              <Col className="Play-content">
                <BsPlayCircle color="white" size={100} />
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: props.title,
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="banner rounded ">
            <Row>
              <Col>
                <img src={props.banner} alt="" className="img" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Play;
