/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
export interface IProps {
  title: string;
  src: string;
  names: string[];
  Price: string;
  AddScr: string;
}

function SelectShoes(props: IProps) {
  return (
    <Container className="SelectShoes-Body p-5 " fluid="xl">
      <Row className="p-0">
        <Col className="p-0" xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
          <div className="tag">
            <span>Students Now Get 10% Off</span>
          </div>
          <div className="title-viewMore">
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="viewMore">
              <a href="#" className=" mt-auto mb-auto ms-auto">
                View More
              </a>
            </div>
          </div>
          <div className="Container-Box">
            {props.names.map((e, i) => (
              <Card className="m-2" key={i}>
                <Card.Body className="d-flex flex-row mt-3 mb-3 ">
                  <img src={props.src} alt="" className="img" />
                  <div className="Details ms-3 ">
                    <div className="stars d-flex flex-row ">
                      <AiFillStar color="black" size={17} />
                      <AiFillStar color="black" size={17} />
                      <AiFillStar color="black" size={17} />
                      <AiFillStar color="black" size={17} />
                      <BsStarHalf color="black" size={17} />
                    </div>
                    <div
                      className="card-title"
                      dangerouslySetInnerHTML={{
                        __html: e,
                      }}
                    />
                    <div
                      className="price"
                      dangerouslySetInnerHTML={{
                        __html: props.Price,
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
        <Col className="adds" xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <img src={props.AddScr} alt="" className="img2" />
        </Col>
      </Row>
    </Container>
  );
}

export default SelectShoes;
