/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RedButton from "../../Utils/RedButton/RedButton";

export interface IProps {
  title: string;
  tag: string;
  addsrc: string;
  title2: string;
  randomImage1: string;
  randomImage2: string;
  Text1: string;
  ButtonText: string;
  Option1: string;
  Option2: string;
  Option3: string;
  Option4: string;
  expreiance: string;
}
function Behind(props: IProps) {
  const [active, setActive] = useState("");
  return (
    <div className="Behind-Body" id="Promotions1">
      <Container className="ads" fluid>
        <Row>
          <Col>
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="img-Container">
              <img src={props.addsrc} alt="" className="img mt-5 pb-5 " />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="Bheind-Content">
        <Row className="Row2">
          <Col
            className="mb-3 col1"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={5}
            xxl={4}
          >
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title2"
              dangerouslySetInnerHTML={{
                __html: props.title2,
              }}
            />
            <img src={props.randomImage1} alt="" className="img" />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.Text1,
              }}
            />
            <RedButton text={props.ButtonText} />
          </Col>
          <Col
            className="mb-3 col2"
            xs={12}
            sm={12}
            md={9}
            lg={9}
            xl={6}
            xxl={6}
          >
            <img src={props.randomImage2} alt="" className="img2" />
            <img src={props.expreiance} alt="" className="ExperianceTag" />
          </Col>
          <Col
            className="mb-3 col3"
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={2}
            xxl={2}
          >
            <div className="Links">
              <div
                style={{ color: active !== "1" ? "#8c8c8c" : "#D9121F" }}
                className="Link"
                onClick={() => {
                  if (active === "1") setActive("");
                  else setActive("1");
                }}
                dangerouslySetInnerHTML={{
                  __html: props.Option1,
                }}
              />
              <div
                style={{ color: active !== "2" ? "#8c8c8c" : "#D9121F" }}
                className="Link"
                onClick={() => {
                  if (active === "2") setActive("");
                  else setActive("2");
                }}
                dangerouslySetInnerHTML={{
                  __html: props.Option2,
                }}
              />
              <div
                style={{ color: active !== "3" ? "#8c8c8c" : "#D9121F" }}
                className="Link"
                onClick={() => {
                  if (active === "3") setActive("");
                  else setActive("3");
                }}
                dangerouslySetInnerHTML={{
                  __html: props.Option3,
                }}
              />
              <div
                style={{ color: active !== "4" ? "#8c8c8c" : "#D9121F" }}
                className="Link"
                onClick={() => {
                  if (active === "4") setActive("");
                  else setActive("4");
                }}
                dangerouslySetInnerHTML={{
                  __html: props.Option4,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Behind;
