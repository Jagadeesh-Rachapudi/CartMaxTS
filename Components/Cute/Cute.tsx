/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  img1: string;
  img2: string;
  tag: string;
  title: string;
  text: string;
  buttontext: string;
}

function Cute(props: IProps) {
  return (
    <Container fluid className="Cute-Body">
      <Row>
        <Col xs={0} sm={0} md={0} lg={6} xl={6} xxl={6} className="images">
          <div>
            <img src={props.img1} alt="" className="img1 rounded " />
            <img src={props.img2} alt="" className="img2 rounded " />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="part2">
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
            <button
              className="Button"
              dangerouslySetInnerHTML={{
                __html: props.buttontext,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cute;
