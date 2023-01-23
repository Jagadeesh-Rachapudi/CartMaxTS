/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export interface IProps {
  text: string;
}

function PinkButton(props: IProps) {
  return (
    <Container fluid className="PinkButton p-0">
      <Row className="p-0">
        <Col className="p-0">
          <button
            className="Button rounded"
            dangerouslySetInnerHTML={{
              __html: props.text,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PinkButton;
