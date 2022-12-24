/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsCheckCircle,
} from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export interface IProps {
  logoSrc: string;
  logoContent: string;
  col2Hedding: string;
  col3Hedding: string;
  col4Hedding: string;
  col2Items: string[];
  col3Items: string[];
  col4Items: string[];
  emailText: string;
}

function Footer1(props: IProps) {
  return (
    <Container fluid className="Footer1-Body" id="Pages">
      <Row>
        <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className="col1">
          <img src={props.logoSrc} alt="" className="img ms-5 " />
          <div
            className="text ms-5 mt-2"
            dangerouslySetInnerHTML={{
              __html: props.logoContent,
            }}
          />
          <div className="socials ms-5 mt-2 d-flex flex-row ">
            <BsFacebook className="me-2" size={20} color="#C2C2C2" />
            <BsTwitter className="me-2" size={20} color="#C2C2C2" />
            <BsYoutube className="me-2" size={20} color="#C2C2C2" />
            <BsInstagram className="me-2" size={20} color="#C2C2C2" />
            <MdOutlineEmail className="me-2" size={20} color="#C2C2C2" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className="col2">
          <div
            className="hedding mb-3 "
            dangerouslySetInnerHTML={{
              __html: props.col2Hedding,
            }}
          />
          {props.col2Items.map((Item, id) => (
            <div className="link-container d-flex flex-row mt-1" key={id}>
              <BsCheckCircle className="me-2 mt-2" size={20} color="#C2C2C2" />
              <a
                href="#"
                className="link"
                dangerouslySetInnerHTML={{
                  __html: Item,
                }}
              />
            </div>
          ))}
        </Col>
        <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className="col3">
          <div
            className="hedding mb-3 "
            dangerouslySetInnerHTML={{
              __html: props.col3Hedding,
            }}
          />
          {props.col3Items.map((Item, id) => (
            <div className="link-container d-flex flex-row mt-1" key={id}>
              <BsCheckCircle className="me-2 mt-2" size={20} color="#C2C2C2" />
              <a
                className="link"
                href="#"
                dangerouslySetInnerHTML={{
                  __html: Item,
                }}
              />
            </div>
          ))}
        </Col>
        <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className="col4 ">
          <div
            className="hedding mb-3  "
            dangerouslySetInnerHTML={{
              __html: props.col4Hedding,
            }}
          />
          {props.col4Items.map((Item, id) => (
            <div className="link-container d-flex flex-row mt-1" key={id}>
              <BsCheckCircle className="me-2 mt-2" size={20} color="#C2C2C2" />
              <a
                className="link"
                href="#"
                dangerouslySetInnerHTML={{
                  __html: Item,
                }}
              />
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <div className="mail-image d-flex flex-row mt-5 justify-content-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Femail%20(2).png?alt=media&token=77ba6f1c-94c7-4bd7-9915-99b7f041e616"
              alt=""
              height={40}
              width={40}
              className="mt-auto mb-auto"
            />

            <div
              className="Email-Text ms-3"
              dangerouslySetInnerHTML={{
                __html: props.emailText,
              }}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <div className="Form mt-5 me-auto ms-auto pb-5 ">
            <form className="Input-Button">
              <input type="text" className="Input" placeholder="Your email" />
              <button className="Button">SUBSCRIBE</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer1;
