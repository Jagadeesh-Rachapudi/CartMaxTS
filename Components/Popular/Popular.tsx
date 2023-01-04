import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import MarketItem, {
  IProps as MarketItemProps,
} from "../../Utils/MarketItem/MarketItem";
import MarketItemData from "../../Utils/MarketItem/MarketItem.json";

export interface IProps {
  tag: string;
  title: string;
  Options: string[];
}

function Popular(props: IProps) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Popular-Body">
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
          <Col className="d-flex flex-row justify-content-between">
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div className="options d-flex flex-row mt-auto mb-auto ">
              {props.Options.map((e, i) => (
                <div
                  key={i}
                  className={
                    selected === i
                      ? "me-1 ms-1 option active"
                      : "me-1 ms-1 option"
                  }
                  onClick={() => {
                    if (selected === i) setSelected(0);
                    else setSelected(i);
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Container-Box">
              <div className="m-1">
                <MarketItem {...(MarketItemData as MarketItemProps)} />
              </div>
              <div className="m-1">
                <MarketItem {...(MarketItemData as MarketItemProps)} />
              </div>
              <div className="m-1">
                <MarketItem {...(MarketItemData as MarketItemProps)} />
              </div>
              <div className="m-1">
                <MarketItem {...(MarketItemData as MarketItemProps)} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Popular;
