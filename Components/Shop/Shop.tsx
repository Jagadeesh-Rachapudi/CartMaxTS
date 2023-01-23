/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  tag: string;
  title: string;
  products: { producttitle: string; count: string; color: string }[];
}

function Shop(props: IProps) {
  return (
    <div className="Shop-Body">
      <div className="part1">
        <Container fluid>
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
        </Container>
        <Container className="products-container">
          <Row>
            <Col>
              <div className="products">
                {props.products.map(
                  (
                    product: {
                      producttitle: string;
                      count: string;
                      color: string;
                    },
                    i
                  ) => (
                    <article className="Product" key={i}>
                      <article
                        className="inner-product"
                        style={{ backgroundColor: product.color }}
                      ></article>
                      <div
                        className="product-tilte"
                        dangerouslySetInnerHTML={{
                          __html: product.producttitle,
                        }}
                      />
                      <div
                        className="count"
                        dangerouslySetInnerHTML={{
                          __html: product.count,
                        }}
                      />
                    </article>
                  )
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="part2">
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
