import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoldItem from "../../Utils/GoldItem/GoldItem";

export interface IProps {
  tag: string;
  title: string;
  items: { name: string; src: string }[];
}

function Categories3(props: IProps) {
  return (
    <Container className="Categories3-Body" id="Watches">
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
          <div className="title"></div>
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
            {props.items.map((item: { name: string; src: string }, i) => (
              <div key={i} className="m-1">
                <GoldItem name={item.name} src={item.src} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories3;
