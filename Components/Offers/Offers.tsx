import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

import SpecialOffer, {
  IProps as SpecialOfferProps,
} from "../../Utils/SpecialOffer/SpecialOffer";
import SpecialOfferData from "../../Utils/SpecialOffer/SpecialOffer.json";

export interface IProps {
  tag: string;
  title: string;
  Options: string[];
  dummy: string[];
}

function Offers(props: IProps) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Offers-Body">
      <Container fluid="md">
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
            <div className="Options">
              {props.Options.map((e, i) => (
                <div
                  key={i}
                  className={
                    selected === i
                      ? "Option1 ms-2 me-2 active"
                      : "Option1 ms-2 me-2"
                  }
                  onClick={() => {
                    if (selected === i) setSelected(0);
                    else setSelected(i);
                  }}
                >
                  <div>{e}</div>
                  <div
                    className={selected === i ? "UnderLine2" : "UnderLine"}
                  ></div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Container-Box">
              {props.dummy.map((i) => (
                <div key={i}>
                  <SpecialOffer {...(SpecialOfferData as SpecialOfferProps)} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Offers;
