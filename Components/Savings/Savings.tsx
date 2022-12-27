/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  src1: string;
  Title: string;
  price: string;
  text: string;
  Color: string;
  Size: string;
  UK: string;
  Button: string;
  src2: string;
}

function Savings(props: IProps) {
  return (
    <Container className="Savings-body " fluid>
      <Row className="p-0">
        <Col className="p-0">
          <img src={props.src1} alt="" className="img" />
          <div className="content">
            <div className=""></div>
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.Title,
              }}
            />
            <div className=" "></div>
            <div
              className="price mt-3 mb-3"
              dangerouslySetInnerHTML={{
                __html: props.price,
              }}
            />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="colors mt-4 mb-3  d-flex flex-row ">
              <div
                className="color-hedding"
                dangerouslySetInnerHTML={{
                  __html: props.Color,
                }}
              />
              <div className="color1"></div>
              <div className="color2"></div>
            </div>
            <div className="button-container d-flex flex-row ">
              <div className="value d-flex flex-row ">
                <div
                  className="size mt-auto mb-auto"
                  dangerouslySetInnerHTML={{
                    __html: props.Size,
                  }}
                />
                <div
                  className="UK mt-auto mb-auto"
                  dangerouslySetInnerHTML={{
                    __html: props.UK,
                  }}
                />
              </div>
              <div
                className="Button"
                dangerouslySetInnerHTML={{
                  __html: props.Button,
                }}
              />
            </div>
          </div>
        </Col>
        <Col className="col2">
          <div className="images">
            <img src={props.src2} alt="" className="img1" />
            <img src={props.src2} alt="" className="img2" />
            <img src={props.src2} alt="" className="img3" />
            <div className="verticalBox"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Savings;
