/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export interface IProps {
  src: string;
  src2: string;
  title: string;
  tag: string;
  imageText: string;
  Button: string;
  Button2: string;
  Holiday: string;
}
function Percent(props: IProps) {
  return (
    <Container className="Percent-Body p-0" fluid>
      <Row className="p-0">
        <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={8} className=" black p-0">
          <img src={props.src} alt="" className="img" />
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <button
            className="Button"
            dangerouslySetInnerHTML={{
              __html: props.Button,
            }}
          />
        </Col>
        <Col className=" white p-0" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div className="whitebox">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2F50%20%25.png?alt=media&token=e3aced4c-a6b9-4545-a56b-1eb89ce914b0"
              alt=""
              className="img"
            />
            <div
              className="imageText"
              dangerouslySetInnerHTML={{
                __html: props.Holiday,
              }}
            />
            <button
              className="Button"
              dangerouslySetInnerHTML={{
                __html: props.Button2,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Percent;
