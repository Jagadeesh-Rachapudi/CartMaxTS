import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsArticle2, {
  NewsArticle2Props,
} from "../../Utils/NewsArticle2/NewsArticle2";
import NewsArticle2Data from "../../Utils/NewsArticle2/NewsArticle2.json";
import RedButton from "../../Utils/RedButton/RedButton";
export interface IProps {
  tag: string;
  title: string;
  ButtonText: string;
}

function News2(props: IProps) {
  return (
    <Container className="News2-Body">
      <Row>
        <Col>
          <div className="tag"></div>
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
          <div className="Container-Box">
            <NewsArticle2 {...(NewsArticle2Data as NewsArticle2Props)} />
            <NewsArticle2 {...(NewsArticle2Data as NewsArticle2Props)} />
            <NewsArticle2 {...(NewsArticle2Data as NewsArticle2Props)} />
          </div>
          <div className="Button-Container mb-5 ">
            <RedButton text={props.ButtonText} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default News2;
