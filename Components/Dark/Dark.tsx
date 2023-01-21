import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillPlayFill } from "react-icons/bs";

export interface IProps {
  tag: string;
  title: string;
  buttontext: string;
  text: string;
}
function Dark(props: IProps) {
  return (
    <Container className="Dark-Body" fluid>
      <Row>
        <Col>
          <Container className="play rounded">
            <Row>
              <Col className="Col1">
                <div
                  className="play-Button"
                  onClick={() => {
                    window.open("https://youtube.com", "_blank");
                  }}
                >
                  <BsFillPlayFill color="#f76954" size={100} className="icon" />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <div className="content">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="button-Container">
              <button
                onClick={() => {
                  window.open("https://youtube.com", "_blank");
                }}
                className="Button"
                dangerouslySetInnerHTML={{
                  __html: props.buttontext,
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dark;
