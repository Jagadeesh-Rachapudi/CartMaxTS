/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsArticle3, {
  IProps as NewsArticle3Props,
} from "../../Utils/NewsArticle3/NewsArticle3";
import NewsArticle3Data from "../../Utils/NewsArticle3/NewsArticle3.json";

export interface IProps {
  tag: string;
  title: string;
  dummy: string[];
  add: string;
}

function LatestNews(props: IProps) {
  return (
    <Container className="LatestNews-Body">
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
          <div className="Container-Box">
            {props.dummy.map((e, i) => (
              <div key={i}>
                <NewsArticle3 {...(NewsArticle3Data as NewsArticle3Props)} />;
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="add">
            <img src={props.add} className="w-100" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LatestNews;
