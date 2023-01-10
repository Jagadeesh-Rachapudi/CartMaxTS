/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SlCalender } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";

import WatchItem, {
  IProps as WatchItemProps,
} from "../../Utils/WatchItem/WatchItem";
import WatchItemData from "../../Utils/WatchItem/WatchItem.json";
import BrownButton from "../../Utils/BrownButton/BrownButton";

export interface IProps {
  tag: string;
  title: string;
  title2: string;
  images: string[];
  by: string;
  date: string;
  text: string;
  buttontext: string;
  tag3: string;
  tag4: string;
  title3: string;
  title4: string;
  link: string;
}

function Collection2(props: IProps) {
  return (
    <div className="Collection2-Body">
      <Container>
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
            <div className="Container-Box">
              {props.images.map((e, i) => (
                <div key={i}>
                  <WatchItem {...(WatchItemData as WatchItemProps)} src={e} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
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
        <Row className="mt-5" id="Blog4">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={5}
            className="p-0 light"
          >
            <div className="content">
              <div
                className="title2 mb-3 "
                dangerouslySetInnerHTML={{
                  __html: props.title2,
                }}
              />
              <div className="d-flex mb-3 ">
                <div className="date d-flex mt-1 me-4 ">
                  <SlCalender size={17} className="" color="#D66622" />
                  <div
                    className="ms-3"
                    dangerouslySetInnerHTML={{
                      __html: props.date,
                    }}
                  />
                </div>
                <div className="d-flex">
                  <BsPerson size={17} className="mt-1 me-2" color="#D66622" />
                  <div
                    className="by mt-1 "
                    dangerouslySetInnerHTML={{
                      __html: props.by,
                    }}
                  />
                </div>
              </div>
              <div
                className="text mb-3 "
                dangerouslySetInnerHTML={{
                  __html: props.text,
                }}
              />
              <div className="button-Container">
                <BrownButton text={props.buttontext} />
              </div>
            </div>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={0}
            xl={0}
            xxl={7}
            className="p-0 dark"
          ></Col>
        </Row>
        <Row className="mt-4">
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={0}
            xl={0}
            xxl={7}
            className="p-0 dark"
          ></Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={5}
            className="p-0 light"
          >
            <div className="content">
              <div
                className="title2 mb-3 "
                dangerouslySetInnerHTML={{
                  __html: props.title2,
                }}
              />
              <div className="d-flex mb-3 ">
                <div className="date d-flex mt-1 me-4 ">
                  <SlCalender size={17} className="" color="#D66622" />
                  <div
                    className="ms-3"
                    dangerouslySetInnerHTML={{
                      __html: props.date,
                    }}
                  />
                </div>
                <div className="d-flex">
                  <BsPerson size={17} className="mt-1 me-2" color="#D66622" />
                  <div
                    className="by mt-1 "
                    dangerouslySetInnerHTML={{
                      __html: props.by,
                    }}
                  />
                </div>
              </div>
              <div
                className="text mb-3 "
                dangerouslySetInnerHTML={{
                  __html: props.text,
                }}
              />
              <div className="button-Container">
                <BrownButton text={props.buttontext} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
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
            <div className="Container-Box">
              {props.images.map((e, i) => (
                <div key={i}>
                  <WatchItem {...(WatchItemData as WatchItemProps)} src={e} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bottom">
        <Row>
          <Col className="whitebox" xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              className="tag mb-2"
              dangerouslySetInnerHTML={{
                __html: props.tag3,
              }}
            />
            <div
              className="title mb-2"
              dangerouslySetInnerHTML={{
                __html: props.title3,
              }}
            />
            <div
              className="link"
              dangerouslySetInnerHTML={{
                __html: props.link,
              }}
            />
          </Col>
          <Col className="darkbox" xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              className="tag mb-2"
              dangerouslySetInnerHTML={{
                __html: props.tag4,
              }}
            />
            <div
              className="title2 mb-2"
              dangerouslySetInnerHTML={{
                __html: props.title4,
              }}
            />
            <div
              className="link"
              dangerouslySetInnerHTML={{
                __html: props.link,
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Collection2;
