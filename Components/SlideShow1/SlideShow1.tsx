/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiDivergence } from "react-icons/gi";
import Carousel from "react-bootstrap/Carousel";
export interface IProps {
  Images: { src: string; alt: string }[];
  content: string;
  clientLogos: {
    src: string;
    alt: string;
  }[];
}

function SlideShow1(props: IProps) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
  };
  return (
    <Container className="SlideShow1-body" fluid id="ShoesHome">
      <Row>
        <Col className="p-0">
          <Carousel>
            {props.Images.map((Images: { src: string; alt: string }, i) => (
              <Carousel.Item key={i}>
                <img src={Images.src} alt={Images.alt} className="img" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="Card" id="ShoesPromotions">
        <Col>
          <div
            className="text-center text"
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
          />
        </Col>
        <Row>
          <Col className=" logs ">
            {props.clientLogos.map(
              (Value: { src: string; alt: string }, i: number) => (
                <img src={Value.src} alt="" className="img  " key={i} />
              )
            )}
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default SlideShow1;
