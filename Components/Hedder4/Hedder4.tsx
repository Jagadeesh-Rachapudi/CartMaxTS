/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export interface IProps {
  dummy: string[];
}

function Hedder4(props: IProps) {
  const [active, setActive] = useState(1);
  return (
    <Container fluid className="Hedder4-Body">
      <Row>
        <Col className="p-0 ">
          <div className="d-flex">
            <div className="content">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2F6a929e2fd80767890cfefb3828b23a32.png?alt=media&token=cd98b55a-087f-4ec4-96a7-bd279d3dd0a9"
                alt=""
                className="img"
              />
              <div className="tag">EARRINGS</div>
              <div className="name">Wedding Rings</div>
              <div className="price">$299.00</div>
            </div>
            <div className=" ms-auto Black-Button">
              <div className="BlackBox">
                <div className="tag">NEW COLLECTION 2022</div>
                <div className="title mt-3 ">
                  Fossil Explorist Men&apos;s Watch
                </div>
                <div className="text mt-3 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididuntLorem ipsum dolor sit amet,
                  consectetur adipisicing
                </div>
                <button className="Button mt-5 ">MORE ABOUT</button>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div
              onClick={() => {
                if (active == 1) setActive(2);
                else setActive(1);
              }}
              className={`${active == 1 ? "button2 border2 " : "button3"}`}
            >
              <div>
                <HiArrowSmLeft className="left" size={50} />
              </div>
            </div>
            <div
              onClick={() => {
                if (active == 2) setActive(1);
                else setActive(2);
              }}
              className={`${active == 2 ? "button2" : "button1"}`}
            >
              <div>
                <HiArrowSmRight className="right" size={50} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hedder4;
