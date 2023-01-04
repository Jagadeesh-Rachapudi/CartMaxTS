import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColorCard from "../../Utils/ColorCard/ColorCard";
import Card from "react-bootstrap/Card";

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
            <div className="Container-Box mb-5 ">
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
                  <div className="cards-conatiner m-1  " key={i}>
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
        <Row>
          <Col>
            <div className="Container-Box mt-5 mb-5 ">
              <Card className="Card1 rounded  m-1 ">
                <Card.Body className="Card1-content">
                  <div className="title2 mb-1 ">LOVE YOUR WATCH</div>
                  <div className="text1">items as low as US $6.99!</div>
                  <div className="text2">
                    Receive a free Gift with every order
                  </div>
                </Card.Body>
              </Card>
              <Card className="Card2 rounded m-1 ">
                <Card.Body className="Card2-content">
                  <div className="title3 mb-2 ">
                    NAILS WORTH <br /> FLAUNTING
                  </div>
                  <div className="text2">
                    Fashion Nails <br /> everywhere you go
                  </div>
                </Card.Body>
              </Card>
              <Card className="Card3 rounded m-1 ">
                <Card.Body className="Card3-content">
                  <div className="text mb-2">BRAND ZONE</div>
                  <div className="title4">
                    FEATURED BRANDS <br /> ALL STARS
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Featured;
