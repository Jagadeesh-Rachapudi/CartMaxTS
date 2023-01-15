/* eslint-disable @next/next/no-img-element */
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
  title: string;
  Articles: { color: string; title: string; tag: string; src: string }[];
}

function TopSelling(props: IProps) {
  return (
    <Container className="TopSelling-Body" fluid>
      <Row className="p-0">
        <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={2} className="p-0"></Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={10}
          className="p-0 Col2 "
        >
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
                    <div key={i} className="mt-5">
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
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TopSelling;
