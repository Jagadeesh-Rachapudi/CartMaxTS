/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsPlayFill } from "react-icons/bs";

export interface IProps {
  text1: string;
  text2: string;
  text3: string;
  points: string[];
  hedding1: string;
  hedding2: string;
  hedding3: string;
  src1: string;
  src2: string;
  src3: string;
}

function TabsInDetails(props: IProps) {
  return (
    <Container className="TabsInDetails-Body">
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="DESCRIPTION">
              <div className="content">
                <div className="p1">
                  <h1
                    className="hedding"
                    dangerouslySetInnerHTML={{
                      __html: props.hedding1,
                    }}
                  />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text1,
                    }}
                  />
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text2,
                    }}
                  />
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text3,
                    }}
                  />
                  <div className="points mt-5 ">
                    {props.points.map((e, i) => (
                      <div key={i} className="point">
                        <BsPlayFill color="red" size={17} /> <>{e}</>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p2">
                  <div className="img-Container ms-auto ">
                    <img src={props.src1} alt="" className="img rounded " />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="ADDITIONAL INFORMATION">
              <div className="content">
                <div className="p1">
                  <h1
                    className="hedding"
                    dangerouslySetInnerHTML={{
                      __html: props.hedding2,
                    }}
                  />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text1,
                    }}
                  />
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text2,
                    }}
                  />
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text3,
                    }}
                  />
                  <div className="points mt-5 ">
                    {props.points.map((e, i) => (
                      <div key={i} className="point">
                        <BsPlayFill color="red" size={17} /> <>{e}</>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p2">
                  <div className="img-Container ms-auto ">
                    <img src={props.src2} alt="" className="img rounded " />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="REVIEWS (3)">
              <div className="content">
                <div className="p1">
                  <h1
                    className="hedding"
                    dangerouslySetInnerHTML={{
                      __html: props.hedding3,
                    }}
                  />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text1,
                    }}
                  />
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text2,
                    }}
                  />
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: props.text3,
                    }}
                  />
                  <div className="points mt-5 ">
                    {props.points.map((e, i) => (
                      <div key={i} className="point">
                        <BsPlayFill color="red" size={17} /> <>{e}</>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p2">
                  <div className="img-Container ms-auto ">
                    <img src={props.src3} alt="" className="img rounded " />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default TabsInDetails;
