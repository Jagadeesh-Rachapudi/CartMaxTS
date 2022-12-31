/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import RedButton from "../../Utils/RedButton/RedButton";
import { useState, useEffect } from "react";

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
  tag1: string;
  title1: string;
  text1: string;
  ButtonText: string;
}

function Timmer2(props: IProps) {
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
    <Container className="Timmer2-Body" fluid>
      <Row className="p-0">
        <Col
          xs={12}
          sm={12}
          md={10}
          lg={10}
          xl={10}
          xxl={10}
          className="p-0 white "
        >
          <div className="Boxes">
            <div className="Box1"></div>
            <div className="Box2"></div>
            <div className="Box3"></div>
          </div>

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
            className="text"
            dangerouslySetInnerHTML={{
              __html: props.text1,
            }}
          />
          <div className="timmer2-body">
            <div className="timmer2  pb-4  ">
              <div className="ms-2 me-2">
                <div className="days rounded-circle p-3">
                  {day}
                  <div
                    className="subtext me-auto ms-auto mt-1"
                    dangerouslySetInnerHTML={{
                      __html: props.timmer.days,
                    }}
                  />
                </div>
              </div>
              <div className="ms-2 me-2">
                <div className="days rounded-circle p-3">
                  {hrs}
                  <div
                    className="subtext me-auto ms-auto mt-1 "
                    dangerouslySetInnerHTML={{
                      __html: props.timmer.hours,
                    }}
                  />
                </div>
              </div>
              <div className="ms-2 me-2">
                <div className="days rounded-circle p-3">
                  {min}
                  <div
                    className="subtext me-auto ms-auto mt-1"
                    dangerouslySetInnerHTML={{
                      __html: props.timmer.mins,
                    }}
                  />
                </div>
              </div>
              <div className="ms-2 me-2">
                <div className="days rounded-circle p-3  ">
                  {sec}
                  <div
                    className="subtext me-auto ms-auto mt-1 "
                    dangerouslySetInnerHTML={{
                      __html: props.timmer.sec,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Button-Container">
            <RedButton text="BUY IT NOW" />
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          className="p-0 dark "
        ></Col>
      </Row>
    </Container>
  );
}

export default Timmer2;
