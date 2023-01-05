/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsSearch, BsBag, BsHeart } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";

export interface IProps {
  src: string;
  tag2: string;
  title2: string;
  Count: string;
  Price: string;
}

function SpecialOffer(props: IProps) {
  const [selected, setSelected] = useState(0);
  return (
    <Container className="SpecialOffer-Body">
      <Row>
        <Col className="d-flex">
          <div className="image-Container">
            <div className="Icons">
              <div
                className={selected === 1 ? "icon active-icon" : "icon"}
                onClick={() => {
                  if (selected === 1) setSelected(0);
                  else setSelected(1);
                }}
              >
                <BsSearch size={20} className="icon1" />
              </div>
              <div
                className={selected === 2 ? "icon active-icon" : "icon"}
                onClick={() => {
                  if (selected === 2) setSelected(0);
                  else setSelected(2);
                }}
              >
                <BsBag size={20} className="icon2" />
              </div>
              <div
                className={selected === 3 ? "icon active-icon" : "icon"}
                onClick={() => {
                  if (selected === 3) setSelected(0);
                  else setSelected(3);
                }}
              >
                <BsHeart size={20} className="icon3" />
              </div>
              <div
                className={selected === 4 ? "icon active-icon" : "icon"}
                onClick={() => {
                  if (selected === 4) setSelected(0);
                  else setSelected(4);
                }}
              >
                <BiRefresh size={20} className="icon4" />
              </div>
            </div>
            <img src={props.src} className="img" />
          </div>
          <div className="P2">
            <Row>
              <Col>
                <div
                  className="tag2"
                  dangerouslySetInnerHTML={{
                    __html: props.tag2,
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  className="title2"
                  dangerouslySetInnerHTML={{
                    __html: props.title2,
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="stars-Count">
                  <div className="stars">
                    <AiFillStar color="gold" />
                    <AiFillStar color="gold" />
                    <AiFillStar color="gold" />
                    <AiFillStar color="gold" />
                    <AiOutlineStar color="grey" />
                  </div>
                  <div
                    className="Count"
                    dangerouslySetInnerHTML={{
                      __html: props.Count,
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  className="price"
                  dangerouslySetInnerHTML={{
                    __html: props.Price,
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecialOffer;
