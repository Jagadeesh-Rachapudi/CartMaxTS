import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

import WatchItem, {
  IProps as WatchItemProps,
} from "../../Utils/WatchItem/WatchItem";
import WatchItemData from "../../Utils/WatchItem/WatchItem.json";

export interface IProps {
  tag: string;
  title: string;
  Options: string[];
  images: string[];
}

function Collection(props: IProps) {
  const [active, setActive] = useState(0);
  return (
    <Container className="Collection-Body">
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
        <Col className="title-Options">
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <div className="options  mt-auto mb-auto ">
            {props.Options.map((e, i) => (
              <div
                key={i}
                style={{ color: active !== i ? "#8c8c8c" : "#252525" }}
                onClick={() => {
                  if (active === i) setActive(0);
                  else setActive(i);
                }}
                className="option me-2"
                dangerouslySetInnerHTML={{
                  __html: e,
                }}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Container-Box">
            {props.images.map((e, i) => (
              <div key={i}>
                <WatchItem {...(WatchItemData as WatchItemProps)} src={e} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Collection;
