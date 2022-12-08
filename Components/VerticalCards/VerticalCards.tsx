/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export interface IProps {
  data: {
    tag: string;
    title: string;
    link: string;
    color: string;
    src: string;
  }[];
}

function VerticalCards(props: IProps) {
  return (
    <div className="VerticalCards mt-5 ">
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col>
            <div className="Cards d-flex flex-row justify-content-center">
              {props.data.map(({ tag, title, link, color, src }, id) => (
                <Card key={id}>
                  <Card.Body
                    style={{ backgroundColor: `${color}` }}
                    className="d-flex flex-row card1 "
                  >
                    <div className="card-p1 mt-auto mb-auto ms-2">
                      <div className="tag">{tag}</div>
                      <div
                        className="title"
                        dangerouslySetInnerHTML={{
                          __html: `${title}`,
                        }}
                      />
                      <a href="#" className="link">
                        {link}
                      </a>
                    </div>
                    <div className="cardp2 mt-auto mb-auto">
                      <img src={src} alt="" className="img" />
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VerticalCards;
