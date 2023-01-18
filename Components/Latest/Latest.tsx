import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

import Gadget, { IProps as GadgetProps } from "../../Utils/Gadget/Gadget";
import GadgetData from "../../Utils/Gadget/Gadget.json";

export interface IProps {
  hours: string;
  mins: string;
  seconds: string;
  title: string;
  viewall: string;
  products: {
    src: string;
    title: string;
    price1: number;
    price2: number;
    id: number;
  }[];
}

function Latest(props: IProps) {
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
    <Container className="Latest-Body">
      <Row>
        <Col className="title-row">
          <div
            className="title mt-auto mb-auto"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          <div className="d-flex">
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
            <a
              className="mt-auto mb-auto ms-3"
              dangerouslySetInnerHTML={{
                __html: props.viewall,
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Container-Box">
            {props.products.map(
              (
                product: {
                  src: string;
                  title: string;
                  price1: number;
                  price2: number;
                  id: number;
                },
                i
              ) => (
                <Gadget
                  key={i}
                  {...(GadgetData as unknown as GadgetProps)}
                  src={product.src}
                  title={product.title}
                  price1={product.price1}
                  price2={product.price2}
                  prodid={product.id}
                />
              )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Latest;
