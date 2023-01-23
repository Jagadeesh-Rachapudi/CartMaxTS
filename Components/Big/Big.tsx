import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  tag1: string;
  tag2: string;
  tag3: string;

  title1: string;
  title2: string;
  title3: string;

  percent1: string;
  percent2: string;

  buttontext: string;
}

function Big(props: IProps) {
  const [active, setActive] = useState(-1);
  const [bgColor1, setBgColor1] = useState("#494949");
  const [bgColor2, setBgColor2] = useState("#494949");
  const [bgColor3, setBgColor3] = useState("#494949");

  const handleMouseOver1 = () => {
    setBgColor1("#f92950");
  };

  const handleMouseOver2 = () => {
    setBgColor2("#f92950");
  };

  const handleMouseOver3 = () => {
    setBgColor3("#f92950");
  };

  const handleMouseOut1 = () => {
    setBgColor1("#494949");
  };

  const handleMouseOut2 = () => {
    setBgColor2("#494949");
  };

  const handleMouseOut3 = () => {
    setBgColor3("#494949");
  };
  return (
    <Container className="Big-Body" fluid>
      <Row>
        <Col>
          <div className="Container-Box">
            <div className="element rounded">
              <div className="content">
                <div
                  className="tag"
                  dangerouslySetInnerHTML={{
                    __html: props.tag1,
                  }}
                />
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: props.title1,
                  }}
                />
                <div
                  className="percent"
                  dangerouslySetInnerHTML={{
                    __html: props.percent1,
                  }}
                />
                <div className="button-container">
                  <button
                    className="Button rounded"
                    onClick={() => {
                      if (active === 1) setActive(-1);
                      else setActive(1);
                    }}
                    style={{
                      backgroundColor: active == 1 ? "#f92950" : bgColor1,
                    }}
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}
                    dangerouslySetInnerHTML={{
                      __html: props.buttontext,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="element rounded">
              <div className="content">
                <div
                  className="tag"
                  dangerouslySetInnerHTML={{
                    __html: props.tag2,
                  }}
                />
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: props.title2,
                  }}
                />
                <div
                  className="percent"
                  dangerouslySetInnerHTML={{
                    __html: props.percent1,
                  }}
                />
                <div className="button-container">
                  <button
                    className="Button rounded"
                    onClick={() => {
                      if (active === 2) setActive(-1);
                      else setActive(2);
                    }}
                    style={{
                      backgroundColor: active == 2 ? "#f92950" : bgColor2,
                    }}
                    onMouseOver={handleMouseOver2}
                    onMouseOut={handleMouseOut2}
                    dangerouslySetInnerHTML={{
                      __html: props.buttontext,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="element rounded">
              <div className="content">
                <div
                  className="tag"
                  dangerouslySetInnerHTML={{
                    __html: props.tag3,
                  }}
                />
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: props.title3,
                  }}
                />
                <div
                  className="percent"
                  dangerouslySetInnerHTML={{
                    __html: props.percent2,
                  }}
                />
                <div className="button-container">
                  <button
                    className="Button rounded"
                    onClick={() => {
                      if (active === 3) setActive(-1);
                      else setActive(3);
                    }}
                    style={{
                      backgroundColor: active == 3 ? "#f92950" : bgColor3,
                    }}
                    onMouseOver={handleMouseOver3}
                    onMouseOut={handleMouseOut3}
                    dangerouslySetInnerHTML={{
                      __html: props.buttontext,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Big;
