import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColorCard from "../../Utils/ColorCard/ColorCard";

export interface IProps {
  tag: string;
  title: string;
  cards: {
    src: string;
    title2: string;
    color1: string;
    color2: string;
    Count: string;
  }[];
}

function Featured(props: IProps) {
  return (
    <>
      <Container className="Featured-Body">
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
              {props.cards.map(
                (
                  card: {
                    src: string;
                    title2: string;
                    color1: string;
                    color2: string;
                    Count: string;
                  },
                  i
                ) => (
                  <div className="cards-conatiner m-1 " key={i}>
                    <ColorCard
                      src={card.src}
                      title2={card.title2}
                      color1={card.color1}
                      color2={card.color2}
                      Count={card.Count}
                    />
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Featured;
