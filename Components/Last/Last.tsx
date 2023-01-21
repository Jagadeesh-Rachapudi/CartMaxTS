/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeFashionItem, {
  IProps as HomeFashionItemProps,
} from "../../Utils/HomeFashionItem/HomeFashionItem";
import HomeFashionItemData from "../../Utils/HomeFashionItem/HomeFashionItem.json";

export interface IProps {
  tag: string;
  title: string;
  dummy: string[];
}

function Last(props: IProps) {
  return (
    <div>
      <div className="Last-Body">
        <Container id="Shop1">
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
              <div className="Container-Box">
                {props.dummy.map((e, i) => (
                  <div key={i} className="m-1">
                    <HomeFashionItem
                      {...(HomeFashionItemData as HomeFashionItemProps)}
                      imageTitle={e}
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="mt-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLayer%2056%20(1).png?alt=media&token=d2aa57b3-44f7-4a80-af38-4e590d14cf2c"
              alt=""
              className="w-100 mb-5"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Last;
