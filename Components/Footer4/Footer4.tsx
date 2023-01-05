/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlueButton from "../../Utils/BlueButton/BlueButton";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";

export interface IProps {
  src: string;
  text: string;
  hedding1: string;
  hedding2: string;
  hedding3: string;
  addr1: string;
  addr2: string;
  addr3: string;
  Links1: string[];
  Links2: string[];
}

function Footer4(props: IProps) {
  return (
    <div className="Footer4-Body">
      <Container fluid="xl">
        <Row className="pt-5 mt-5">
          <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
            <div className="content1">
              <img src={props.src} className="img mb-3 " />
              <div
                className="text mb-4"
                dangerouslySetInnerHTML={{
                  __html: props.text,
                }}
              />
              <BlueButton text="More About" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2}>
            <div className="content2">
              <div className="Container mt-3">
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding1,
                  }}
                />
                <div className="underline1"></div>
              </div>
              <div className="links mt-3 ">
                {props.Links1.map((e, i) => (
                  <div key={i} className="Container">
                    <a
                      href="#"
                      className="link"
                      dangerouslySetInnerHTML={{
                        __html: e,
                      }}
                    />
                    <div className="underline"></div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2}>
            <div className="content2">
              <div className="Container mt-3">
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding2,
                  }}
                />
                <div className="underline1"></div>
              </div>
              <div className="links mt-3 ">
                {props.Links2.map((e, i) => (
                  <div key={i} className="Container">
                    <a
                      href="#"
                      className="link"
                      dangerouslySetInnerHTML={{
                        __html: e,
                      }}
                    />
                    <div className="underline"></div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <div className="content4">
              <div className="Container mt-3">
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding3,
                  }}
                />
                <div className="underline1"></div>
              </div>
              <div className="links mt-4 ">
                <div className="d-flex mt-2 mb-2 ">
                  <div className="icon1 me-2  mt-auto mb-auto ">
                    <GoLocation color="white" className="ms-2 mt-1" />
                  </div>
                  <div
                    className="address"
                    dangerouslySetInnerHTML={{
                      __html: props.addr1,
                    }}
                  />
                </div>
                <hr />
                <div className="d-flex mt-2 mb-2 ">
                  <div className="icon2 me-2  mt-auto mb-auto ">
                    <BiPhoneCall color="white" className="ms-2 mt-1" />
                  </div>
                  <div
                    className="address"
                    dangerouslySetInnerHTML={{
                      __html: props.addr2,
                    }}
                  />
                </div>
                <hr />
                <div className="d-flex mt-2 mb-2 ">
                  <div className="icon3 me-2  mt-auto mb-auto ">
                    <AiOutlineMail color="white" className="ms-2 mt-1" />
                  </div>
                  <div
                    className="address"
                    dangerouslySetInnerHTML={{
                      __html: props.addr3,
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer4;
