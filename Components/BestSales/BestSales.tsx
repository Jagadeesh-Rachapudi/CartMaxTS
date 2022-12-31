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
}

function BestSales(props: IProps) {
  return (
    <div className="BestSales-Body" id="Shop1">
      <Container fluid="lg">
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
              <HomeFashionItem
                {...(HomeFashionItemData as HomeFashionItemProps)}
                imageTitle="Crew Neck T-shirt"
              />
              <HomeFashionItem
                {...(HomeFashionItemData as HomeFashionItemProps)}
                imageTitle="Crew Neck T-shirt"
              />
              <HomeFashionItem
                {...(HomeFashionItemData as HomeFashionItemProps)}
                imageTitle="Crew Neck T-shirt"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BestSales;
