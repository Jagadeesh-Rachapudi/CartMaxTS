/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import ShoesOnDisplay, {
  IProps as ShoesOnDisplayProps,
} from "../../Utils/ShoesOnDisplay/ShoesOnDisplay";

import ShoesOnDisplayData from "../../Utils/ShoesOnDisplay/ShoesOnDisplay.json";

export interface IProps {
  tag: string;
  title: string;
  names: string[];
  TimmerTag: string;
  Hedding: string;
  Content: string;
  DAYS: string;
  HOURS: string;
  MINUTES: string;
  SECONDS: string;
  Button1: string;
  CardHedding: string;
  CardTag: string;
  ShoesImages: string;
  ColorsText: string;
  Price1: string;
  Price2: string;
  Size: string;
  UK: string;
  Button2: string;
}

function Categories(props: IProps) {
  const [size, setSize] = useState("UK 5.5");

  const [day, setDay] = useState(12);
  const [hrs, setHrs] = useState(36);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(13);
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
    <Container className="Categories-Body" fluid>
      <Row>
        <Col>
          <span
            className="d-flex justify-content-center"
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
          <div className="Container-Box mt-3 mb-5">
            {props.names.map((name: string, i: number) => (
              <div key={i} className="me-2">
                <ShoesOnDisplay
                  {...(ShoesOnDisplayData as ShoesOnDisplayProps)}
                  name={name}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="Timmer-Box">
        <Container>
          <Row>
            <Col className="Timmer-Content" sm={12} md={6} lg={6}>
              <Row>
                <div
                  className="tag-2 ps-0"
                  dangerouslySetInnerHTML={{
                    __html: props.TimmerTag,
                  }}
                />
              </Row>
              <Row>
                <div
                  className="Hedding mt-3 ps-0"
                  dangerouslySetInnerHTML={{
                    __html: props.Hedding,
                  }}
                />
              </Row>
              <Row>
                <div
                  className="Content mt-3 ps-0"
                  dangerouslySetInnerHTML={{
                    __html: props.Content,
                  }}
                />
              </Row>
              <Row>
                <div className="Timmer d-flex flex-row  ps-0 ">
                  <div className="days-text-container p-2 ">
                    <div className="days">{day}</div>
                    <div
                      className="days-text me-auto ms-auto "
                      dangerouslySetInnerHTML={{
                        __html: props.DAYS,
                      }}
                    />
                  </div>
                  <div className="colon">:</div>
                  <div className="days-text-container p-2 ">
                    <div className="days">{hrs}</div>
                    <div
                      className="days-text"
                      dangerouslySetInnerHTML={{
                        __html: props.HOURS,
                      }}
                    />
                  </div>
                  <div className="colon">:</div>
                  <div className="days-text-container p-2 ">
                    <div className="days">{min}</div>
                    <div
                      className="days-text"
                      dangerouslySetInnerHTML={{
                        __html: props.MINUTES,
                      }}
                    />
                  </div>
                  <div className="colon">:</div>
                  <div className="days-text-container p-2 ">
                    <div className="days">{sec}</div>
                    <div
                      className="days-text"
                      dangerouslySetInnerHTML={{
                        __html: props.SECONDS,
                      }}
                    />
                  </div>
                </div>
              </Row>
              <Row>
                <button
                  className="Explore-Button"
                  dangerouslySetInnerHTML={{
                    __html: props.Button1,
                  }}
                />
              </Row>
            </Col>
            <Col className="Timmer-Card rounded " sm={12} md={6} lg={6}>
              <div
                className="card-hedding"
                dangerouslySetInnerHTML={{
                  __html: props.CardHedding,
                }}
              />
              <div
                className="card-tag mt-2 mb-3"
                dangerouslySetInnerHTML={{
                  __html: props.CardTag,
                }}
              />
              <img src={props.ShoesImages} alt="" className="img" />
              <div className="colors-hedding mt-3 d-flex flex-row ">
                <div
                  className="color"
                  dangerouslySetInnerHTML={{
                    __html: props.ColorsText,
                  }}
                />
                <div className="color1 mt-2 "></div>
                <div className="color2 mt-2 "></div>
                <div className="ms-auto me-3 d-flex flex-row ">
                  <div
                    className="price1"
                    dangerouslySetInnerHTML={{
                      __html: props.Price1,
                    }}
                  />
                  <div
                    className="price2"
                    dangerouslySetInnerHTML={{
                      __html: props.Price2,
                    }}
                  />
                </div>
              </div>
              <Row className="d-flex flex-row">
                <div className="sizes mt-3 d-flex flex-row ">
                  <div
                    className="size mt-auto mb-auto me-1 "
                    dangerouslySetInnerHTML={{
                      __html: props.Size,
                    }}
                  />
                  {/* <div
                    className="value"
                    dangerouslySetInnerHTML={{
                      __html: props.UK,
                    }}
                  /> */}
                  <DropdownButton
                    className="DropDown p-0 "
                    id="value"
                    title={size}
                    variant="transparent"
                  >
                    <Dropdown.Item
                      className="Link"
                      href="#/action-1"
                      onClick={() => {
                        setSize("UK 5.5");
                      }}
                    >
                      UK 5.5
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="Link"
                      href="#/action-2"
                      onClick={() => {
                        setSize("UK 6.0");
                      }}
                    >
                      UK 6.0
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="Link"
                      href="#/action-3"
                      onClick={() => {
                        setSize("UK 6.5");
                      }}
                    >
                      UK 6.5
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
                <div
                  className="Cart-Button mt-3 ms-auto me-3"
                  dangerouslySetInnerHTML={{
                    __html: props.Button2,
                  }}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Categories;
