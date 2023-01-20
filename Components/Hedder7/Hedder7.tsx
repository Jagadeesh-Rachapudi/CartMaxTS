/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrownButton from "../../Utils/BrownButton/BrownButton";

export interface IProps {
  tag: string;
  title: string;
  text: string;
  ButtonText: string;
  src: string;
}

function Hedder7(props: IProps) {
  return (
    <Container className="Hedder7-Body" fluid id="Home6">
      <Row>
        <Col
          className="White p-0"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <div>
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="d-flex justify-content-center">
              <div className="underline"></div>
              <div
                className="tag"
                dangerouslySetInnerHTML={{
                  __html: props.tag,
                }}
              />
              <div className="underline"></div>
            </div>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="button">
              <BrownButton text={props.ButtonText} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hedder7;
