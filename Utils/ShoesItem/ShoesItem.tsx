/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

export interface IProps {
  bestSellers: string;
  Percent: string;
  title: string;
  Price: string;
  src: string;
}

function ShoesItem(props: IProps) {
  return (
    <Container className="ShoesItem-Body rounded ">
      <Row>
        <Col>
          <div className="top-row d-flex flex-row">
            <div className="stars me-auto">
              <div
                className="bestSellers mt-3"
                dangerouslySetInnerHTML={{
                  __html: props.bestSellers,
                }}
              />
              <div
                className="percent mt-1"
                dangerouslySetInnerHTML={{
                  __html: props.Percent,
                }}
              />
            </div>
            <div className="icons">
              <div className="icon rounded  ">
                <AiOutlineShoppingCart size={30} />
              </div>
              <div className="icon rounded ">
                <AiOutlineHeart size={30} />
              </div>
              <div className="icon rounded ">
                <AiOutlineSearch size={30} />
              </div>
            </div>
            <div className="stars ms-auto mt-auto mb-auto">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
            </div>
          </div>
          <img src={props.src} alt="" className="img" />
          <hr />
          <div className="title-Colors d-flex flex-row ">
            <div
              className="Shoe-title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="colors d-flex flex-row  mt-auto mb-auto ms-auto">
              <div className="color1 me-1 ms-1 "></div>
              <div className="color2 me-1 ms-1"></div>
              <div className="color3 me-1 ms-1 "></div>
              <div className="color4 me-1 ms-1 "></div>
            </div>
          </div>
          <div
            className="price mb-3"
            dangerouslySetInnerHTML={{
              __html: props.Price,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ShoesItem;
