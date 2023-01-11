import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";

import MarketItem, {
  IProps as MarketItemProps,
} from "../../Utils/MarketItem/MarketItem";
import MarketItemData from "../../Utils/MarketItem/MarketItem.json";

export interface IProps {
  tag: string;
  title: string;
  Options: string[];
  products: { id: number; productName: string; url: string; price: number }[];
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
          <Col className="titleRow">
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
              {props.products.map((product, i: number) => (
                <div key={i}>
                  <MarketItem
                    {...(MarketItemData as MarketItemProps)}
                    id={product.id}
                    productName={product.productName}
                    url={product.url}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Popular;
