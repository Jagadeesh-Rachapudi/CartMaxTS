/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  tag: string;
  title: string;
  hedding1: string;
  hedding2: string;
  hedding3: string;
  text: string;
  addimg: string;
}

function Insta(props: IProps) {
  return (
    <div className="Insta-Body">
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
      <div className="Insta-bg">
        <div className="Insta-tiles">
          <div className="Insta-Tiles-Col-1">
            <div className="Insta-tailes-black"></div>
            <div className="Inst-tailes-white"></div>
          </div>
          <div className="Insta-Tiles-Col-2">
            <div className="Inst-tailes-white"></div>
            <div className="Insta-tailes-black"></div>
          </div>
          <div className="Insta-Tiles-Col-3">
            <div className="Insta-tailes-black"></div>
            <div className="Inst-tailes-white"></div>
          </div>
          <div className="Insta-Tiles-Col-4">
            <div className="Inst-tailes-white"></div>
            <div className="Insta-tailes-black"></div>
          </div>
          <div className="Insta-Tiles-Col-5">
            <div className="Insta-tailes-black"></div>
            <div className="Inst-tailes-white"></div>
          </div>
          <div className="Insta-Tiles-Col-6">
            <div className="Inst-tailes-white"></div>
            <div className="Insta-tailes-black"></div>
          </div>
        </div>
      </div>
      <div className="Insta-Content">
        <Container fluid="md">
          <Row>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              xxl={4}
              className="d-flex justify-content-center col1 "
            >
              <div className="content">
                <div className="Image-Container m-auto">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Ffast-delivery.png?alt=media&token=2faa7ae6-a019-4b44-a9d5-0633bdaa86e4"
                    alt=""
                    className="img"
                  />
                </div>
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding1,
                  }}
                />
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: props.text,
                  }}
                />
              </div>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              xxl={4}
              className="d-flex justify-content-center col2"
            >
              <div className="content">
                <div className="Image-Container m-auto">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fcall-center%20(1).png?alt=media&token=2edced7e-8df6-4c56-8901-294c91dc0a87"
                    alt=""
                    className="img"
                  />
                </div>
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding1,
                  }}
                />
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: props.text,
                  }}
                />
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={4}
              xl={4}
              xxl={4}
              className="d-flex justify-content-center col3"
            >
              <div className="content">
                <div className="Image-Container m-auto">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fmoney%20(2).png?alt=media&token=49728ce2-92d7-465e-b9c7-d26ce8bbd5b4"
                    alt=""
                    className="img"
                  />
                </div>
                <div
                  className="hedding"
                  dangerouslySetInnerHTML={{
                    __html: props.hedding1,
                  }}
                />
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: props.text,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center">
        <img src={props.addimg} className="w-100 " />
      </div>
    </div>
  );
}

export default Insta;
