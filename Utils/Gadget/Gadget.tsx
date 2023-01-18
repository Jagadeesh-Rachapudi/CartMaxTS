import React from "react";
/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStarFill, BsStar, BsCart3 } from "react-icons/bs";
import ProgressBar from "react-bootstrap/ProgressBar";

export interface IProps {
  sale: string;
  src: string;
  title: string;
  price1: number;
  price2: number;
  dummy: string[];
  count: string;
  sold: string;
}

function Gadget(props: IProps) {
  return (
    <Container className="Gadget-Body m-2">
      <Row>
        <Col className="d-flex flex-column justify-content-between">
          <div
            className="sale"
            dangerouslySetInnerHTML={{
              __html: props.sale,
            }}
          />
          <div className="img-container">
            <img src={props.src} alt="" className="img mt-5" />
          </div>
          <div
            className="Gadget-title mt-2"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <div className="d-flex mt-2">
            <div className="price1">${props.price1}</div>
            <div className="price2">${props.price2}</div>
          </div>
          <div className="d-flex mt-1">
            <div className="stars">
              {props.dummy.map((e, i) => (
                <BsStarFill size={17} key={i} color="gold" />
              ))}
              <BsStar size={17} color="#a0a0a0" />
            </div>
            <div
              className="count mt-auto ms-3"
              dangerouslySetInnerHTML={{
                __html: props.count,
              }}
            />
          </div>
          <hr className="horizontal-line" />
          <div>
            <ProgressBar now={60} color="black" />
          </div>
          <div
            className="sold mt-3"
            dangerouslySetInnerHTML={{
              __html: props.sold,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Gadget;
