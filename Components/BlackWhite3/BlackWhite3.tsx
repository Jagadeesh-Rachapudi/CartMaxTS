/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ShoesItem, {
  IProps as ShoesItemProps,
} from "../../Utils/ShoesItem/ShoesItem";
import ShoesItemsData from "../../Utils/ShoesItem/ShoesItem.json";
import GradiantButton from "../../Utils/GradiantButton/GradiantButton";

export interface IProps {
  tag1: string;
  tag2: string;
  tag3: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  viewMore: string;
  play: string;
  ButtonText: string;
}
function BlackWhite3(props: IProps) {
  return (
    <div className="BlackWhite3-Body">
      <Container fluid className="BlackWhite3">
        <Row className="p-0">
          <Col className="p-0" xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="dark">
              <div className="tag mb-3 ">
                <span>{props.tag1}</span>
              </div>
              <div
                className="title mb-3"
                dangerouslySetInnerHTML={{
                  __html: props.title1,
                }}
              />
              <div className="Link mb-5 ">
                <span>{props.viewMore}</span>
              </div>
            </div>
          </Col>
          <Col className="p-0" xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="white">
              <div className="tag mb-3 ">
                <span>{props.tag2}</span>
              </div>
              <div
                className="title2 mb-3"
                dangerouslySetInnerHTML={{
                  __html: props.title1,
                }}
              />
              <div className="Link mb-5 ">
                <span>{props.viewMore}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="Items" fluid>
        <Row>
          <Col>
            <div className="tag mt-5 ">
              <span>{props.tag3}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: props.title3,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Container-Box mb-5 ">
              <div className="shoesItemBox mt-3">
                <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
              </div>
              <div className="mt-3">
                <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
              </div>
              <div className="mt-3">
                <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="Play">
        <Row>
          <Col>
            <div className="content">
              <img src={props.play} alt="" className="play-img mb-3 " />
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: props.title4,
                }}
              />
              <div className="Button-Container mt-3 ">
                <GradiantButton text={props.ButtonText} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlackWhite3;
