import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPlayCircle } from "react-icons/bs";
import RedButton from "../../Utils/RedButton/RedButton";
export interface IProps {
  title: string;
  tag: string;
  ButtonText: string;
}
function Amazon(props: IProps) {
  return (
    <Container fluid className="Amazon-Body">
      <Row>
        <Col>
          <div className="content">
            <div className="play p-0 mb-3 ">
              <BsPlayCircle size={100} />
            </div>
            <div
              className="tag mb-2 "
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title mb-3"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div
              className="mb-5"
              onClick={() => {
                window.open("https://youtube.com", "_blank");
              }}
            >
              <RedButton text={props.ButtonText} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Amazon;
