/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrownButton from "../../Utils/BrownButton/BrownButton";

export interface IProps {
  src: string;
  sale: string;
  tag: string;
  title: string;
  price1: string;
  price2: string;
  text: string;
  Color: string;
  ButtonText: string;
}

function TwoParts2(props: IProps) {
  const [active, setActive] = useState(0);
  return (
    <Container className="TwoParts2-Body" fluid>
      <Row>
        <Col xs={0} sm={0} md={0} lg={0} xl={5} xxl={5} className="p-0 dark ">
          <div className="img-Container">
            <img src={props.src} alt="" className="img" />
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={7}
          xxl={7}
          className="p-0 white "
        >
          <div className="content">
            <div
              className="sale rounded"
              dangerouslySetInnerHTML={{
                __html: props.sale,
              }}
            />
            <div
              className="tag mt-3"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title mt-2"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="d-flex mt-2 ">
              <div
                className="price1"
                dangerouslySetInnerHTML={{
                  __html: props.price1,
                }}
              />
              <div
                className="price2 mt-auto mb-auto ms-2"
                dangerouslySetInnerHTML={{
                  __html: props.price2,
                }}
              />
            </div>
            <div
              className="text mt-2"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div
              className="color mt-3"
              dangerouslySetInnerHTML={{
                __html: props.Color,
              }}
            />
            <div className="d-flex mt-2">
              <div
                onClick={() => {
                  if (active === 1) setActive(0);
                  else setActive(1);
                }}
                className={active === 1 ? "active1 rounded me-1" : " me-2 "}
              >
                <div className="color1 rounded"></div>
              </div>
              <div
                onClick={() => {
                  if (active === 2) setActive(0);
                  else setActive(2);
                }}
                className={
                  active === 2 ? "active2 rounded me-1 ms-1 " : " me-2 ms-1 "
                }
              >
                <div className="color2 rounded"></div>
              </div>

              <div
                onClick={() => {
                  if (active === 3) setActive(0);
                  else setActive(3);
                }}
                className={active === 3 ? "active3 rounded ms-1 " : " ms-1 "}
              >
                <div className="color3 rounded "></div>
              </div>
            </div>
            <div className="Button-Container mt-5 ">
              <BrownButton text={props.ButtonText} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TwoParts2;
