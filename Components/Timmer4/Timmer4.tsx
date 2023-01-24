import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import PinkButton from "../../Utils/PinkButton/PinkButton";

export interface IProps {
  title: string;
  text: string;
  hours: string;
  mins: string;
  seconds: string;
  buttontext: string;
}

function Timmer4(props: IProps) {
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
    <Container fluid className="Timmer4-Body">
      <Row>
        <Col xs={0} sm={0} md={6} lg={6} xl={6} xxl={6}></Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <div className="content">
            <div className="play-Border">
              <div className="play-Container">
                <BsFillPlayFill size={100} color="#F92950" className="play" />
              </div>
            </div>
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title,
              }}
            />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="timmer">
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
            </div>
            <div className="Button-Container mt-1">
              <PinkButton text={props.buttontext} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Timmer4;
