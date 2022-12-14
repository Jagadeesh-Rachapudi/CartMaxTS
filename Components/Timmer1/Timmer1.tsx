import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TbSofa, TbLamp2 } from "react-icons/tb";
import { GiTable } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export interface IProps {
  timmer: {
    tag: string;
    title: string;
    content: string;
    days: string;
    hours: string;
    mins: string;
    sec: string;
    button: string;
  };
  cards: {
    count: string;
    products: string[];
  };
}

function Timmer1(props: IProps) {
  const [prodcut, setProduct] = useState("lamp");

  const [day, setDay] = useState(12);
  const [hrs, setHrs] = useState(36);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(3);
  useEffect(() => {
    setTimeout(() => {
      setSec((sec) => sec - 1);
      if (sec == 0) {
        setSec(59);
        if (min > 0) {
          setMin(min - 1);
        }
        if (min == 0) {
          setMin(59);
          if (hrs > 0) {
            setHrs(hrs - 1);
          }
          if (hrs == 0) {
            setHrs(59);
            if (day > 0) {
              setDay(day - 1);
            }
            if (day == 0) {
              setDay(9);
              setHrs(12);
              setMin(18);
              setSec(39);
            }
          }
        }
      }
    }, 1000);
  });

  return (
    <Container fluid className="Timmer1-body">
      <Row>
        <Col>
          <div className="optionsContainer">
            <div className=" options">
              <div
                className="d-flex flex-row p-4 rounded card1 mt-2 mb-2   me-3 "
                style={{
                  backgroundColor: prodcut === "lamp" ? " #f76954 " : " white ",
                  color: prodcut === "lamp" ? " white " : " black ",
                }}
                onClick={() => {
                  if (prodcut === "lamp") setProduct("");
                  else setProduct("lamp");
                }}
              >
                <TbLamp2 className="mt-auto mb-auto me-2" size={40} />
                <div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.products[0],
                    }}
                  />
                  <div
                    className="count"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.count,
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex flex-row p-4 rounded card1 mt-2 mb-2 me-3 "
                style={{
                  backgroundColor: prodcut === "sofa" ? " #f76954 " : " white ",
                  color: prodcut === "sofa" ? " white " : " black ",
                }}
                onClick={() => {
                  if (prodcut === "sofa") setProduct("");
                  else setProduct("sofa");
                }}
              >
                <TbSofa className="mt-auto mb-auto me-2" size={40} />
                <div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.products[1],
                    }}
                  />
                  <div
                    className="count"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.count,
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex flex-row p-4 rounded card1 mt-2 mb-2  me-3  "
                style={{
                  backgroundColor:
                    prodcut === "table" ? " #f76954 " : " white ",
                  color: prodcut === "table" ? " white " : " black ",
                }}
                onClick={() => {
                  if (prodcut === "table") setProduct("");
                  else setProduct("table");
                }}
              >
                <GiTable className="mt-auto mb-auto me-2" size={40} />
                <div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.products[2],
                    }}
                  />
                  <div
                    className="count"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.count,
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex flex-row p-4 rounded card1 mt-2 mb-2 me-3  "
                style={{
                  backgroundColor: prodcut === "bed" ? " #f76954 " : " white ",
                  color: prodcut === "bed" ? " white " : " black ",
                }}
                onClick={() => {
                  if (prodcut === "bed") setProduct("");
                  else setProduct("bed");
                }}
              >
                <BiBed className="mt-auto mb-auto me-2" size={40} />
                <div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.products[3],
                    }}
                  />
                  <div
                    className="count"
                    dangerouslySetInnerHTML={{
                      __html: props.cards.count,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <Card className="mt-5 mb-5 timmerCard">
            <Card.Body>
              <div className="timmer-body">
                <Row>
                  <Col>
                    <div
                      className="tag ms-3  pt-5 mb-3 "
                      dangerouslySetInnerHTML={{
                        __html: props.timmer.tag,
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div
                      className="title  ms-3  mt-2 mb-2"
                      dangerouslySetInnerHTML={{
                        __html: props.timmer.title,
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div
                      className="content ms-3  mt-2 mb-3"
                      dangerouslySetInnerHTML={{
                        __html: props.timmer.content,
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="timmer mt-2 ms-3 pb-5 d-flex flex-row ">
                      <div className="ms-2 me-2">
                        <div className="days rounded p-3 ">{day}</div>
                        <div
                          className="subtext ps-2 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: props.timmer.days,
                          }}
                        />
                      </div>
                      <div className="ms-2 me-2">
                        <div className="days rounded p-3 ">{hrs}</div>
                        <div
                          className="subtext ps-1 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: props.timmer.hours,
                          }}
                        />
                      </div>
                      <div className="ms-2 me-2">
                        <div className="days rounded p-3 ">{min}</div>
                        <div
                          className="subtext ps-2 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: props.timmer.mins,
                          }}
                        />
                      </div>
                      <div className="ms-2 me-2">
                        <div className="days rounded p-3 ">{sec}</div>
                        <div
                          className="subtext ps-3 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: props.timmer.sec,
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button
                      className="ms-2 me-2 mb-3"
                      dangerouslySetInnerHTML={{
                        __html: props.timmer.button,
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Timmer1;
