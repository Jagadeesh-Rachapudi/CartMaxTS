/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picks from "../../Utils/Picks/Picks";

export interface IProps {
  title: string;
  src: string;
  picks: { src: string; title2: string; price: string }[];
}

function HandPick(props: IProps) {
  return (
    <Container className="HandPick-Body">
      <Row>
        <Col>
          <img src={props.src} alt="" className="w-100 rounded mb-5" />
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
            {props.picks.map(
              (pick: { src: string; title2: string; price: string }, i) => (
                <div key={i}>
                  <Picks
                    src={pick.src}
                    title2={pick.title2}
                    price={pick.price}
                  />
                </div>
              )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HandPick;
