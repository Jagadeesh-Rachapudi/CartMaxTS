/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  title: string;
  tag: string;
  products: { src: string; title: string; tag2: string }[];
}

function Tablet(props: IProps) {
  return (
    <Container fluid className="Tablet-Body">
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
            {props.products.map(
              (product: { src: string; title: string; tag2: string }, i) => (
                <div className="product" key={i}>
                  <img src={product.src} alt="" className="img" />
                  <div
                    className="hedding mt-3"
                    dangerouslySetInnerHTML={{
                      __html: product.title,
                    }}
                  />
                  <div
                    className="tag2"
                    dangerouslySetInnerHTML={{
                      __html: product.tag2,
                    }}
                  />
                </div>
              )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Tablet;
