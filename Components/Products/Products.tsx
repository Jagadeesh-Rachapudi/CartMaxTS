/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoldCard from "../../Utils/GoldCard/GoldCard";

export interface IProps {
  tag: string;
  title: string;
  products: {
    src: string;
    Cardtag: string;
    Cardtitle: string;
    price: string;
    prodid: number;
  }[];
}
function Products(props: IProps) {
  return (
    <div className="Products-Body">
      <Container>
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
                (
                  product: {
                    src: string;
                    Cardtag: string;
                    Cardtitle: string;
                    price: string;
                    prodid: number;
                  },
                  i
                ) => (
                  <div key={i}>
                    <GoldCard
                      src={product.src}
                      Cardtag={product.Cardtag}
                      Cardtitle={product.Cardtitle}
                      price={product.price}
                      prodid={product.prodid}
                    />
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
