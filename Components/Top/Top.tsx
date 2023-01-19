/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DisplayCard from "../../Utils/DisplayCard/DisplayCard";

export interface IProps {
  title: string;
  products: { src: string; title: string }[];
}

function Top(props: IProps) {
  return (
    <Container className="Top-Body" fluid="xxl">
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
              (product: { src: string; title: string }, i) => (
                <div key={i} className="m-2">
                  <DisplayCard src={product.src} title={product.title} />
                </div>
              )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Top;
