/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeFashionItem, {
  IProps as HomeFashionItemProps,
} from "../../Utils/HomeFashionItem/HomeFashionItem";
import HomeFashionItemData from "../../Utils/HomeFashionItem/HomeFashionItem.json";

export interface IProps {
  tag: string;
  title: string;
  dummy: { id: number; productname: string; price: number }[];
}

function BestSales(props: IProps) {
  return (
    <div className="BestSales-Body">
      <Container id="Shop1">
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
              {props.dummy.map(
                (
                  product: { id: number; productname: string; price: number },
                  i
                ) => (
                  <div key={i} className="m-1">
                    <HomeFashionItem
                      {...(HomeFashionItemData as HomeFashionItemProps)}
                      imageTitle={product.productname}
                      price={product.price}
                      prodId={product.id}
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

export default BestSales;
