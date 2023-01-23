/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PinkButton from "../../Utils/PinkButton/PinkButton";

export interface IProps {
  bag: string;
  tag: string;
  title: string;
  text: string;
  buttontext: string;
  dummy: string[];
}

function Dreams(props: IProps) {
  return (
    <Container className="Dreams-Body" fluid="xl">
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className="parent">
            <div className="child">
              <img src={props.bag} alt="" className="bag" />
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
          className="text-area"
        >
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
            <div className="boxes">
              {props.dummy.map((e, i) => (
                <div className="box rounded " key={i}>
                  <img src={props.bag} alt="" className="smallbag" />
                </div>
              ))}
            </div>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="button-Container">
              <PinkButton text={props.buttontext} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dreams;
