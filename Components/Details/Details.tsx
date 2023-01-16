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
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import cartReducer from "../../redux/reducers/cartReducer";
import { IStore } from "../../redux/store";

export interface IProps {
  tag: string;
  text: string;
  title: string;
  price: string;
  src: string;
  dummy1: string[];
  dummy2: string[];
  tags: string[];
  count: string;
  hedding1: string;
  hedding2: string;
  hedding3: string;
  hedding4: string;
}

function Details(props: IProps) {
  const [active, setActive] = useState("18k");
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  return (
    <Container className="Details-Body" fluid="xxl">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <div className="content">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div
              className="price"
              dangerouslySetInnerHTML={{
                __html: props.price,
              }}
            />
            <hr className="horizontalline" />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
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
            <img src={props.src} alt="" className="img1" />
          </div>
          <div className=" boxes d-flex justify-content-between mt-4">
            {props.dummy1.map((e, i) => (
              <div key={i} className="box d-flex justify-content-center ">
                <img src={props.src} alt="" className="img2" />
              </div>
            ))}
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <div className="reviews mt-5 mb-3 d-flex justify-content-between  ">
            <div className="d-flex">
              {props.dummy1.map((e, i) => (
                <div key={i}>
                  <AiTwotoneStar size={17} color="gold" />
                </div>
              ))}
              <div>
                <AiTwotoneStar size={17} color="#CCCCCC" className="" />
              </div>
            </div>
            <div
              className="Count"
              dangerouslySetInnerHTML={{
                __html: props.count,
              }}
            />
          </div>
          <hr className="mb-2 horiLine2 " />
          <div
            className="hedding mb-1"
            dangerouslySetInnerHTML={{
              __html: props.hedding1,
            }}
          />
          <div className="d-flex justify-content-between mb-3 boxes2 ">
            {props.dummy2.map((e, i) => (
              <div key={i} className="box2 d-flex justify-content-center">
                <img src={props.src} alt="" className="img2" />
              </div>
            ))}
          </div>
          <hr className="horiLine2 mb-2" />
          <div
            className="hedding mb-1"
            dangerouslySetInnerHTML={{
              __html: props.hedding2,
            }}
          />
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
              <div
                className="whishlist-text"
                dangerouslySetInnerHTML={{
                  __html: props.hedding3,
                }}
              />
            </div>
          </div>
          <hr className="horiLine2 mb-4" />
          <div className="button-Container">
            <button
              className="Button mb-4"
              onClick={() => {
                function addToCart(productId: number, newQuantity: number) {
                  var existingProduct = cart.find(function (item) {
                    return item.pId === productId;
                  });

                  if (existingProduct) {
                    existingProduct.quantity += newQuantity;
                  } else {
                    dispatch(
                      updateCart({
                        products: [
                          ...cart,
                          {
                            pId: 10,
                            productName: "Diamond Vine Climber Earrings",
                            pPrice: 2000,
                            quantity: newQuantity,
                          },
                        ],
                      })
                    );
                  }
                }
                addToCart(10, 1);
              }}
            >
              <BsBag size={17} color="white" className="icon" /> Add to Cart
            </button>
          </div>
          <hr className="horiLine2 mb-4" />
          <div className="tags">
            {props.tags.map((e, i) => (
              <div
                key={i}
                className="tag1 me-2"
                dangerouslySetInnerHTML={{
                  __html: e,
                }}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
