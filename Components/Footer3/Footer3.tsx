/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube, BsGoogle } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { IoMdCall } from "react-icons/io";

export interface IProps {
  title: string;
  Buttontext: string;
  src: string;
  text: string;
  hedding1: string;
  hedding2: string;
  hedding3: string;
  hedding4: string;
  addr1: string;
  addr2: string;
  addr3: string;
  col1: string[];
  col2: string[];
  col3: string[];
}

function Footer3(props: IProps) {
  return (
    <div className="Footer3-Body" id="Pages1">
      <Container>
        <Row>
          <Col>
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="form-container">
              <form
                className="mt-3"
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <input
                  type="email"
                  placeholder="Subcribe Your Email"
                  className="input-form"
                />
                <button
                  type="submit"
                  onClick={() => {
                    event?.preventDefault();
                  }}
                >
                  {props.Buttontext}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid="xl">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
            <div className="content">
              <img src={props.src} alt="" className="Logo" />
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: props.text,
                }}
              />
              <div className="socials d-felx flex-row mt-3 ">
                <BsFacebook size={25} color="#CCCCCC" className="me-3 " />
                <BsTwitter size={25} color="#CCCCCC" className="me-3 " />
                <BsYoutube size={25} color="#CCCCCC" className="me-3 " />
                <BsGoogle size={25} color="#CCCCCC" className="me-3 " />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} xl={2} xxl={2}>
            <div
              className="hedding1"
              dangerouslySetInnerHTML={{
                __html: props.hedding1,
              }}
            />
            <div className="Part4">
              <div className="Links">
                {props.col1.map((e, i) => (
                  <a
                    key={i}
                    href="#"
                    className="Link"
                    dangerouslySetInnerHTML={{
                      __html: e,
                    }}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} xl={2} xxl={2}>
            <div
              className="hedding2"
              dangerouslySetInnerHTML={{
                __html: props.hedding2,
              }}
            />
            <div className="Part4">
              <div className="Links">
                {props.col2.map((e, i) => (
                  <a
                    key={i}
                    href="#"
                    className="Link"
                    dangerouslySetInnerHTML={{
                      __html: e,
                    }}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} xl={2} xxl={2}>
            <div
              className="hedding3"
              dangerouslySetInnerHTML={{
                __html: props.hedding3,
              }}
            />
            <div className="Part4">
              <div className="Links">
                {props.col3.map((e, i) => (
                  <a
                    key={i}
                    href="#"
                    className="Link"
                    dangerouslySetInnerHTML={{
                      __html: e,
                    }}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2}>
            <div
              className="hedding4"
              dangerouslySetInnerHTML={{
                __html: props.hedding4,
              }}
            />
            <div className="Part4">
              <div className="Links">
                <div className="Link-Conatiner">
                  <IoMdCall
                    size={20}
                    color="#D6D6D6"
                    className="mt-auto mb-auto me-2 "
                  />
                  <div
                    className="addr"
                    dangerouslySetInnerHTML={{
                      __html: props.addr1,
                    }}
                  />
                </div>
                <div className="Link-Conatiner">
                  <IoMdCall
                    size={20}
                    color="#D6D6D6"
                    className="mt-auto mb-auto me-2 "
                  />
                  <div
                    className="addr"
                    dangerouslySetInnerHTML={{
                      __html: props.addr2,
                    }}
                  />
                </div>
                <div className="Link-Conatiner">
                  <AiOutlineMail
                    size={20}
                    color="#D6D6D6"
                    className="mt-auto mb-auto me-2 "
                  />
                  <div
                    className="addr"
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

export default Footer3;
