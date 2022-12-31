import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsArticle2, {
  NewsArticle2Props,
} from "../../Utils/NewsArticle2/NewsArticle2";
import NewsArticle2Data from "../../Utils/NewsArticle2/NewsArticle2.json";
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

function News2(props: IProps) {
  return (
    <Container className="News2-Body">
      <Row>
        <Col>
          <div className="tag">JACKET & COAST</div>
          <div className="title">
            Get Cartmax now and set up your Store Today
          </div>
          <div className="Container-Box">
            <NewsArticle2 {...(NewsArticle2Data as NewsArticle2Props)} />
            <NewsArticle2 {...(NewsArticle2Data as NewsArticle2Props)} />
            <NewsArticle2 {...(NewsArticle2Data as NewsArticle2Props)} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default News2;
