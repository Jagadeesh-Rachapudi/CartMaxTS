/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlinePlayCircle } from "react-icons/ai";
import BlueButton from "../../Utils/BlueButton/BlueButton";
import Carousel from "react-bootstrap/Carousel";

export interface IProps {
  tag: string;
  title: string;
  price: string;
  ButtonText: string[];
}

function Smart(props: IProps) {
  return (
    <div className="Smart-Body">
      <Container className="Card" fluid="xxl">
        <Carousel>
          {props.ButtonText.map((e, i) => (
            <Carousel.Item key={i}>
              <Row className="d-flex">
                <Col
                  className="img-container mb-3 "
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  xl={7}
                  xxl={7}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/SM%2FHead-Phones.png?alt=media&token=6af789c0-5ca6-4de7-9ec3-2121d2e0fa76"
                    className="img"
                  />
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
                  <div className="p2 d-flex flex-column justify-content-center ">
                    <div
                      className="tag"
                      dangerouslySetInnerHTML={{
                        __html: props.tag,
                      }}
                    />
                    <div
                      className="title mt-3"
                      dangerouslySetInnerHTML={{
                        __html: props.title,
                      }}
                    />
                    <div
                      className="price mt-3 mb-3"
                      dangerouslySetInnerHTML={{
                        __html: props.price,
                      }}
                    />
                    <BlueButton text={e} />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Smart;
