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
  add: string;
  Items: string[];
}

function Related(props: IProps) {
  return (
    <Container className="Related-Body">
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
            {props.Items.map((e, i) => (
              <div key={i}>
                <HomeFashionItem
                  {...(HomeFashionItemData as HomeFashionItemProps)}
                  imageTitle={e}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={props.add} alt="" className="w-100 mb-5" />
        </Col>
      </Row>
    </Container>
  );
}

export default Related;
