/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { GiWaterDrop } from "react-icons/gi";
import { GrMail } from "react-icons/gr";

export interface IProps {
  logo: string;
  hedding1: string;
  hedding2: string;
  hedding3: string;
  hedding4: string;
  text: string;
  set1: string[];
  set2: string[];
  address: string;
  number: string;
  mail: string;
}

function Footer(props: IProps) {
  return (
    <Container fluid className="Footer">
      <Row>
        <Col>
          <Container fluid="lg">
            <Row>
              <Col className="mt-5 toprow ">
                <img src={props.logo} alt="" className="logo" />
                <div className="socials mt-auto mb-auto ">
                  <div className="icon-container">
                    <BsFacebook size={17} color="#C2C2C2" className="icon" />
                  </div>
                  <div className="icon-container">
                    <BsTwitter size={17} color="#C2C2C2" className="icon" />
                  </div>
                  <div className="icon-container">
                    <BsYoutube size={17} color="#C2C2C2" className="icon" />
                  </div>
                  <div className="icon-container">
                    <BsInstagram size={17} color="#C2C2C2" className="icon" />
                  </div>
                  <div className="icon-container">
                    <AiOutlineMail size={17} color="#C2C2C2" className="icon" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                xxl={4}
                className="mt-5 col1 "
              >
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding1,
                  }}
                />
                <div
                  className="text1 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: props.text,
                  }}
                />
                <div></div>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={2}
                xl={2}
                xxl={2}
                className=" col2 mt-5"
              >
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding2,
                  }}
                />
                <div className="links mt-3">
                  {props.set1.map((e, i) => (
                    <a
                      href="#"
                      className="text"
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: e,
                      }}
                    />
                  ))}
                </div>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={2}
                xl={2}
                xxl={2}
                className=" col3 mt-5"
              >
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding3,
                  }}
                />
                <div className="links mt-3">
                  {props.set2.map((e, i) => (
                    <a
                      href="#"
                      className="text"
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: e,
                      }}
                    />
                  ))}
                </div>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                xxl={4}
                className=" col4 mt-5"
              >
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding4,
                  }}
                />
                <div className="links mt-3">
                  <div className="d-flex">
                    <div className="icon-container2">
                      <GiWaterDrop size={17} color="#C2C2C2" className="icon" />
                    </div>
                    <div
                      className="text mt-auto mb-auto ms-2"
                      dangerouslySetInnerHTML={{
                        __html: props.address,
                      }}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="icon-container2">
                      <AiTwotonePhone
                        size={17}
                        color="#C2C2C2"
                        className="icon"
                      />
                    </div>
                    <div
                      className="text mt-auto mb-auto ms-2"
                      dangerouslySetInnerHTML={{
                        __html: props.number,
                      }}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="icon-container2">
                      <GrMail size={17} color="#C2C2C2" className="icon" />
                    </div>
                    <div
                      className="text mt-auto mb-auto ms-2"
                      dangerouslySetInnerHTML={{
                        __html: props.mail,
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
