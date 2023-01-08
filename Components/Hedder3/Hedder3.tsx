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

function Hedder3(props: IProps) {
  return (
    <Container className="Hedder3-Body">
      <Row>
        <Col
          className="White p-0"
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
          xxl={8}
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
            <img src={props.src} height={350} width={200} className="img" />
          </div>
        </Col>
        <Col
          className="p-0 dark "
          xs={0}
          sm={0}
          md={0}
          lg={4}
          xl={4}
          xxl={4}
        ></Col>
      </Row>
    </Container>
  );
}

export default Hedder3;
