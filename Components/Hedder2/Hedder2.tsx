/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlueButton from "../../Utils/BlueButton/BlueButton";
import Carousel from "react-bootstrap/Carousel";

export interface IProps {
  tag: string;
  title: string;
  From: string;
  price: string;
  ButtonText: string[];
  image1: string;
  image2: string;
}
function Hedder2(props: IProps) {
  return (
    <Container className="Hedder2-Body" fluid>
      <Row>
        <Col className=" add p-0" xs={0} sm={0} md={0} lg={0} xl={3} xxl={3}>
          <img src={props.image1} alt="" className="img1" />
        </Col>
        <Col
          className=" contents d-flex flex-column justify-content-center content "
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={9}
          xxl={9}
        >
          <Carousel variant="dark">
            {props.ButtonText.map((e, i) => (
              <Carousel.Item key={i} className="carousalheight">
                <div
                  className="tag mb-2"
                  dangerouslySetInnerHTML={{
                    __html: props.tag,
                  }}
                />
                <div
                  className="title mb-1"
                  dangerouslySetInnerHTML={{
                    __html: props.title,
                  }}
                />
                <div
                  className="From mb-3"
                  dangerouslySetInnerHTML={{
                    __html: props.From,
                  }}
                />
                <div
                  className="price mb-2"
                  dangerouslySetInnerHTML={{
                    __html: props.price,
                  }}
                />
                <div className="Button-Container">
                  <BlueButton text={e} />
                </div>
                <img src={props.image2} alt="" className="helmet" />{" "}
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Hedder2;
