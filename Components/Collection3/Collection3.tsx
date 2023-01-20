import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

import WatchItem2, {
  IProps as WatchItem2Props,
} from "../../Utils/WatchItem2/WatchItem2";
import WatchItem2Data from "../../Utils/WatchItem2/WatchItem2.json";

export interface IProps {
  tag: string;
  title: string;
  Options: string[];
  images: string[];
}

function Collection3(props: IProps) {
  const [active, setActive] = useState(0);
  return (
    <Container className="Collection3-Body" id="Product4">
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
                style={{ color: active == i ? "white" : "#C1C1C1" }}
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
              <div key={i} className="m-2">
                <WatchItem2 {...(WatchItem2Data as WatchItem2Props)} src={e} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Collection3;
