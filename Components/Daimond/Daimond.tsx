/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TransButton from "../../Utils/TransButton/TransButton";

export interface IProps {
  tag: string;
  title: string;
  buttontext: string;
}

function Daimond(props: IProps) {
  return (
    <Container fluid className="Daimond-Body">
      <Row className="p-0">
        <Col className="p-0">
          <div className="box"></div>
        </Col>
      </Row>
      <Row className="p-0">
        <Col
          className="p-0 content"
          xs={12}
          sm={12}
          md={12}
          lg={11}
          xl={11}
          xxl={11}
        >
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <div
            className="mt-3 tag mb-3"
            dangerouslySetInnerHTML={{
              __html: props.tag,
            }}
          />
          <div className="Button-Container">
            <TransButton color="white" text={props.buttontext} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Daimond;
