import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsArticleData from "../../Utils/NewsArticle/NewsArticle.json";
import NewsArticle, {
  IProps as NewsArticleProps,
} from "../../Utils/NewsArticle/NewsArticle";
import { title } from "process";

export interface IProps {
  tag: string;
  Title: string;
  Articles: string[];
}

function News(props: IProps) {
  return (
    <Container fluid className="News-Body mb-5 ">
      <Row>
        <Col>
          <div
            className="tag text-center "
            dangerouslySetInnerHTML={{
              __html: props.tag,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="Title text-center "
            dangerouslySetInnerHTML={{
              __html: props.Title,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="Container">
          {props.Articles.map((e, id) => (
            <div key={id} className="mt-5">
              <NewsArticle
                {...(NewsArticleData as NewsArticleProps)}
                title={e}
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default News;
