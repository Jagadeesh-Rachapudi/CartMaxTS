import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsArticleData from "../../Utils/NewsArticle/NewsArticle.json";
import NewsArticle, {
  IProps as NewsArticleProps,
} from "../../Utils/NewsArticle/NewsArticle";

export interface IProps {
  tag: string;
  Title: string;
  Articles: { color: string; title: string; tag: string; src: string }[];
}

function News(props: IProps) {
  return (
    <Container fluid className="News-Body mb-5" id="Blog">
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
          {props.Articles.map(
            (
              Article: {
                color: string;
                title: string;
                tag: string;
                src: string;
              },
              i
            ) => (
              <div key={i} className="m-4">
                <NewsArticle
                  {...(NewsArticleData as NewsArticleProps)}
                  title={Article.title}
                  color={Article.color}
                  tag={Article.tag}
                  src={Article.src}
                />
              </div>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default News;
