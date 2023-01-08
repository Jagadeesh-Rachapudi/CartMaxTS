/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrownButton from "../../Utils/BrownButton/BrownButton";

export interface IProps {
  src: string;
  sale: string;
  tag: string;
  title: string;
  price1: string;
  price2: string;
  text: string;
  Color: string;
  ButtonText: string;
}

function TwoParts(props: IProps) {
  return (
    <Container className="TwoParts-Body" fluid>
      <Row>
        <Col xs={0} sm={0} md={0} lg={0} xl={5} xxl={5} className="p-0 dark ">
          <div className="img-Container">
            <img src={props.src} alt="" className="img" />
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={7}
          xxl={7}
          className="p-0 white "
        >
          <div className="content">
            <div
              className="sale rounded"
              dangerouslySetInnerHTML={{
                __html: props.sale,
              }}
            />
            <div
              className="tag mt-3"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title mt-2"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="d-flex mt-2 ">
              <div
                className="price1"
                dangerouslySetInnerHTML={{
                  __html: props.price1,
                }}
              />
              <div
                className="price2 mt-auto mb-auto ms-2"
                dangerouslySetInnerHTML={{
                  __html: props.price2,
                }}
              />
            </div>
            <div
              className="text mt-2"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div
              className="color mt-3"
              dangerouslySetInnerHTML={{
                __html: props.Color,
              }}
            />
            <div className="d-flex mt-2 ">
              <div className="color1 me-1 ms-1 rounded"></div>
              <div className="color2 rounded me-1 ms-1"></div>
              <div className="color3 rounded me-1 ms-1"></div>
            </div>
            <div className="Button-Container mt-5 ">
              <BrownButton text={props.ButtonText} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TwoParts;
