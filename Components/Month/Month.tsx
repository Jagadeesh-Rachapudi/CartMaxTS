import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import HomeFashionItem, {
  IProps as HomeFashionItemProps,
} from "../../Utils/HomeFashionItem/HomeFashionItem";
import HomeFashionItemData from "../../Utils/HomeFashionItem/HomeFashionItem.json";
import RedButton from "../../Utils/RedButton/RedButton";

export interface IProps {
  tag: string;
  title: string;
  Option1: string;
  Option2: string;
  Items: string[];
  ButtonText: string;
}
function Month(props: IProps) {
  return (
    <div className="Month-Body">
      <Container className="p-0">
        <Row className="p-0">
          <Col className="p-0">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
          </Col>
        </Row>
        <Row className="p-0">
          <Col className="p-0">
            <div className="title-Options ">
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: props.title,
                }}
              />
              <div className="Options">
                <div
                  className="Option1 me-2 mt-auto mb-auto"
                  dangerouslySetInnerHTML={{
                    __html: props.Option1,
                  }}
                />
                <div
                  className="Option1 mt-auto mb-auto"
                  dangerouslySetInnerHTML={{
                    __html: props.Option2,
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="p-0">
          <Col className="p-0">
            <div className="Container-Box mb-5 ">
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
            <div className="button-Container mb-5 ">
              <RedButton text={props.ButtonText} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Month;
