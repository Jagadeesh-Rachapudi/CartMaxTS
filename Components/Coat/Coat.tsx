import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RedButton from "../../Utils/RedButton/RedButton";

export interface IProps {
  tag: string;
  title: string;
  text: string;
  buttontext: string;
}

function Coat(props: IProps) {
  return (
    <Container className="Coat-Body">
      <div className="content">
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
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Button-Container">
              <RedButton text={props.buttontext} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Coat;
