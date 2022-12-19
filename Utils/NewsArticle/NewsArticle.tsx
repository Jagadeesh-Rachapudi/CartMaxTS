/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  src: string;
  tag: string;
  title: string;
  content: string;
  Readmore: string;
}

function NewsArticle(props: IProps) {
  return (
    <Container className="NewsArticle-Body">
      <Row>
        <Col>
          <div className="Date">
            <div>20</div>
            <div>Jan</div>
          </div>
          <img src={props.src} alt="" className="rounded" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="tagh"
            dangerouslySetInnerHTML={{
              __html: props.tag,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="Titleh"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
          />
          <hr className="Horizontal-Line" />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            className="Readmore"
            href="#News"
            dangerouslySetInnerHTML={{
              __html: props.Readmore,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default NewsArticle;
