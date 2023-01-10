/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WatchItem, {
  IProps as WatchItemProps,
} from "../../Utils/WatchItem/WatchItem";
import WatchItemData from "../../Utils/WatchItem/WatchItem.json";

export interface IProps {
  tag: string;
  title: string;
  buttontext: string;
  images: string[];
}

function Edition(props: IProps) {
  return (
    <Container className="Edition-Body" id="Shop4">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
          <div className="tag"></div>
          <div
            className="tag"
            dangerouslySetInnerHTML={{
              __html: props.tag,
            }}
          />
          <div className="title-explore">
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div
              className="Explore"
              dangerouslySetInnerHTML={{
                __html: props.buttontext,
              }}
            />
          </div>
          <div className="Container-Box">
            {props.images.map((e, i) => (
              <div key={i} className="m-2">
                <WatchItem {...(WatchItemData as WatchItemProps)} src={e} />
              </div>
            ))}
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={4} xxl={4} className="Col2">
          <img src="https://picsum.photos/420/1010" alt="" className="img" />
        </Col>
      </Row>
    </Container>
  );
}

export default Edition;
