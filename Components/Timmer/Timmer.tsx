import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

export interface IProps {
  dummy: string[];
  tag: string;
  tag2: string;
  title: string;
  price1: string;
  price2: string;
  buttontext: string;
  hours: string;
  mins: string;
  seconds: string;
}

function Timmer(props: IProps) {
  const [hrs, setHrs] = useState(21);
  const [min, setMin] = useState(50);
  const [sec, setSec] = useState(39);
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
            setHrs(12);
            setMin(18);
            setSec(39);
          }
        }
      }
    }, 1000);
  });
  return (
    <Container className="Timmer-Body" fluid>
      <Row>
        <Col xs={0} sm={0} md={0} lg={6} xl={6} xxl={6} className="Col1">
          <div className="boxes">
            {props.dummy.map((e, i) => (
              <div className="mt-2 box mb-2" key={i}></div>
            ))}
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className="timmer">
            <div
              className="tag mb-2"
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
            <div className="d-flex mt-3">
              <div
                className="price1"
                dangerouslySetInnerHTML={{
                  __html: props.price1,
                }}
              />
              <div
                className="price2 ms-3"
                dangerouslySetInnerHTML={{
                  __html: props.price2,
                }}
              />
            </div>
            <div
              className="tag2 mt-4"
              dangerouslySetInnerHTML={{
                __html: props.tag2,
              }}
            />
            <div className="mt-3 mb-4 d-flex">
              <div className="numbercontainer me-2">
                <div className="time">{hrs}</div>
                <div
                  className="days"
                  dangerouslySetInnerHTML={{
                    __html: props.hours,
                  }}
                />
              </div>
              <div className="numbercontainer ms-2 me-2">
                <div className="time">{min}</div>
                <div
                  className="days"
                  dangerouslySetInnerHTML={{
                    __html: props.mins,
                  }}
                />
              </div>
              <div className="numbercontainer ms-2 me-2">
                <div className="time">{sec}</div>
                <div
                  className="days"
                  dangerouslySetInnerHTML={{
                    __html: props.seconds,
                  }}
                />
              </div>
            </div>
            <button
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

export default Timmer;
