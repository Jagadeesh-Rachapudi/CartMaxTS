/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BsFacebook,
  BsBag,
  BsTwitter,
  BsInstagram,
  BsHeart,
} from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

export interface IProps {
  tag: string;
  title: string;
  buttontext: string;
}

function Details(props: IProps) {
  const [active, setActive] = useState("18k");
  return (
    <Container className="Details-Body" fluid="xxl">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <div className="content">
            <div className="tag">SUMMER 2022</div>
            <div className="title">Diamond Gold Chain</div>
            <div className="price">
              <b>$1,800.</b>99
            </div>
            <hr className="horizontalline" />
            <div className="text">
              Because we have many types of elements we created Live Editor for
              you so you can see live changes. link of elements we created Live
              tEditor for you so forat you can for you so you can.
            </div>
            <hr className="horizontalline" />
            <div className="d-flex icons ">
              <div className="icon-container">
                <BsFacebook size={17} color="#C2C2C2" className="icon" />
              </div>
              <div className="icon-container">
                <BsTwitter size={17} color="#C2C2C2" className="icon" />
              </div>
              <div className="icon-container">
                <BsInstagram size={17} color="#C2C2C2" className="icon" />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <div className="d-flex roseBox justify-content-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
              alt=""
              className="img1"
            />
          </div>
          <div className=" boxes d-flex justify-content-between mt-4">
            <div className="box d-flex justify-content-center ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
                alt=""
                className="img2"
              />
            </div>
            <div className="box d-flex justify-content-center ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
                alt=""
                className="img2"
              />
            </div>
            <div className="box d-flex justify-content-center ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
                alt=""
                className="img2"
              />
            </div>
            <div className="box d-flex justify-content-center ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
                alt=""
                className="img2"
              />
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <div className="reviews mt-5 mb-3 d-flex justify-content-between  ">
            <div className="d-flex">
              <AiTwotoneStar size={17} color="gold" className="" />
              <AiTwotoneStar size={17} color="gold" className="" />
              <AiTwotoneStar size={17} color="gold" className="" />
              <AiTwotoneStar size={17} color="gold" className="" />
              <AiTwotoneStar size={17} color="#CCCCCC" className="" />
            </div>
            <div className="Count">4 Review(s)</div>
          </div>
          <hr className="mb-2 horiLine2 " />
          <div className="hedding mb-1">MORE DESIGN</div>
          <div className="d-flex justify-content-between mb-3 boxes2 ">
            <div className="box2 d-flex justify-content-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
                alt=""
                className="img2"
              />
            </div>
            <div className="box2 d-flex justify-content-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
                alt=""
                className="img2"
              />
            </div>
            <div className="box2 d-flex justify-content-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2019%20(1).png?alt=media&token=4b025c15-e38b-40af-b59a-a70cadefb335"
                alt=""
                className="img2"
              />
            </div>
          </div>
          <hr className="horiLine2 mb-2" />
          <div className="hedding mb-1">SELECT GOLD</div>
          <div className="buttonsGroup">
            <div className="droppdown">
              <Dropdown as={ButtonGroup}>
                <Button className=" name-button bg-transparent" variant="light">
                  <span>{active}</span>
                </Button>
                <Dropdown.Toggle
                  split
                  variant="light"
                  className=" split-button bg-transparent"
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      if (active == "22k") setActive("18k");
                      else setActive("22k");
                    }}
                  >
                    22k
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      if (active == "24k") setActive("18k");
                      else setActive("24k");
                    }}
                  >
                    24k
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="wishlist mt-auto mb-auto d-flex">
              <BsHeart size={17} color="black" className="icon" />
              <div className="whishlist-text">Save to Whishlist</div>
            </div>
          </div>
          <hr className="horiLine2 mb-4" />
          <div className="button-Container">
            <button className="Button mb-4 ">
              <BsBag size={17} color="white" className="icon" /> Add to Cart
            </button>
          </div>
          <hr className="horiLine2 mb-4" />
          <div className="tags  ">
            <div className="tag1 me-2">
              <b>SKU:</b> U2012
            </div>
            <div className="tag1 me-2 ">
              <b>TAGS</b> Hot, Women
            </div>
            <div className="tag1 me-2 ">
              <b>Categories:</b> Earrings
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
