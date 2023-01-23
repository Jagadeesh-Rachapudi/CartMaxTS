/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPlayCircle } from "react-icons/bs";
import PinkButton from "../../Utils/PinkButton/PinkButton";
import Carousel from "react-bootstrap/Carousel";
export interface IProps {
  img1: string;
  img2: string;
  buttontext: string;
  text: string;
  title: string;
  dummy: string[];
}

function Hedder8(props: IProps) {
  return (
    <Container fluid className="Hedder8-Body">
      <Row className="p-0">
        <Col className="p-0">
          <Carousel>
            {props.dummy.map((e, i) => (
              <Carousel.Item key={i}>
                <img
                  src={props.img1}
                  alt="img1"
                  // height="200"
                  // width="200"
                  className="img1"
                />
                <div className="content">
                  <div>
                    <div
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: props.title,
                      }}
                    />
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: props.text,
                      }}
                    />
                    <div className="Button-Container">
                      <PinkButton text={props.buttontext} />
                    </div>
                  </div>
                  <div className="triangle">
                    <div className="icon">
                      <BsPlayCircle color="white" size={70} />
                    </div>
                    <img src={props.img2} alt="img2" />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Hedder8;
