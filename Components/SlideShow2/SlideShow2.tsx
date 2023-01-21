/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import RedButton from "../../Utils/RedButton/RedButton";
import { BsPlayCircle } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";
import { IStore } from "../../redux/store";

export interface IProps {
  src: string;
  tag: string;
  Title: string;
  text: string;
  redButtons: string[];
  OfferText: string;
  button2: string;
}

function SlideShow2(props: IProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: IStore) => state.cart.products);
  return (
    <Container fluid className="SlideShow2-body" id="Home1">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Carousel variant="dark">
            {props.redButtons.map((e, i) => (
              <Carousel.Item key={i}>
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
                      __html: props.Title,
                    }}
                  />
                  <div className="textBox">
                    <div
                      className="text mt-4 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: props.text,
                      }}
                    />
                  </div>
                </div>
                <div className="Buttons">
                  <div
                    className="Button1"
                    onClick={() => {
                      function addToCart(
                        productId: number,
                        newQuantity: number
                      ) {
                        var existingProduct = cart.find(function (item: any) {
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
                                  pId: 101,
                                  productName:
                                    "Outside The City Mini bag Arrivals ",
                                  pPrice: 80.99,
                                  quantity: newQuantity,
                                },
                              ],
                            })
                          );
                        }
                      }
                      addToCart(101, 1);
                    }}
                  >
                    <RedButton text={e} />
                  </div>
                  <button
                    className="Button2 d-flex flex-row"
                    onClick={() => {
                      window.open("https://youtube.com", "_blank");
                    }}
                  >
                    <BsPlayCircle color="black" className="me-2" size={47} />
                    <div
                      className="mt-auto mb-auto"
                      dangerouslySetInnerHTML={{
                        __html: props.button2,
                      }}
                    />
                  </button>
                </div>
                <div className="OfferToggle d-flex flex-row ">
                  <div className="circle"></div>
                  <div className="bar">
                    <div
                      className="OfferText"
                      dangerouslySetInnerHTML={{
                        __html: props.OfferText,
                      }}
                    />
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

export default SlideShow2;
