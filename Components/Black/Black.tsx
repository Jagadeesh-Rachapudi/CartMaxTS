/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BrownButton from "../../Utils/BrownButton/BrownButton";

export interface IProps {
  title: string;
  title2: string;
  tag: string;
  price: string;
  text: string;
  days: string;
  hours: string;
  mins: string;
  secs: string;
  buttontext: string;
}

function Black(props: IProps) {
  const [day, setDay] = useState(12);
  const [hrs, setHrs] = useState(36);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(30);
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
    <div className="Black-Body">
      <Container fluid className="playbox">
        <Row>
          <Col>
            <div className="play">
              <BsFillPlayCircleFill size={100} color="#B38068" />
            </div>
            <div
              className="title mt-3 "
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="timmer-card" fluid="lg">
        <Row>
          <Col className="Content">
            <div
              className="tag"
              dangerouslySetInnerHTML={{
                __html: props.tag,
              }}
            />
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title2,
              }}
            />
            <div
              className="price"
              dangerouslySetInnerHTML={{
                __html: props.price,
              }}
            />
            <div
              className="text mt-2"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="d-flex mt-3 ">
              <div className="number-container rounded me-2">
                <div className="count me-auto ms-auto pt-3">{day}</div>
                <div
                  className="days me-auto ms-auto pt-1"
                  dangerouslySetInnerHTML={{
                    __html: props.days,
                  }}
                />
              </div>
              <div className="number-container rounded me-2 ms-2">
                <div className="count me-auto ms-auto pt-3">{hrs}</div>
                <div
                  className="days me-auto ms-auto pt-1"
                  dangerouslySetInnerHTML={{
                    __html: props.hours,
                  }}
                />
              </div>
              <div className="number-container rounded me-2 ms-2">
                <div className="count me-auto ms-auto pt-3">{min}</div>
                <div
                  className="days me-auto ms-auto pt-1"
                  dangerouslySetInnerHTML={{
                    __html: props.mins,
                  }}
                />
              </div>
              <div className="number-container rounded me-2 ms-2">
                <div className="count me-auto ms-auto pt-3">{sec}</div>
                <div
                  className="days me-auto ms-auto pt-1"
                  dangerouslySetInnerHTML={{
                    __html: props.secs,
                  }}
                />
              </div>
            </div>
            <div className="button-Container mt-3 ">
              <BrownButton text={props.buttontext} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Black;
