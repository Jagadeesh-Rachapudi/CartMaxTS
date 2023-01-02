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
  tag4: string;
  tag5: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  viewMore: string;
  play: string;
  ButtonText: string;
  ButtonText2: string;
  randomImage1: string;
  randomImage2: string;
  text: string;
}
function BlackWhite3(props: IProps) {
  return (
    <div className="BlackWhite3-Body">
      <Container fluid className="BlackWhite3" id="Promotions3">
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
      <Container className="Items" fluid id="Shop3">
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
      <Container fluid className="Play" id="Product3">
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
      <Container className="Columns mb-5" fluid id="Blog3">
        <Row>
          <Col>
            <div className="UpperTag mb-3 ">
              <article>{props.tag5}</article>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="UpperTitle mb-5"
              dangerouslySetInnerHTML={{
                __html: props.title7,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col
            className="content"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            xxl={6}
          >
            <img src={props.randomImage1} alt="" className="img1 rounded " />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="Col2">
            <div className="details">
              <div
                className="tag mb-3"
                dangerouslySetInnerHTML={{
                  __html: props.tag4,
                }}
              />
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: props.title5,
                }}
              />
              <div
                className="text mt-3"
                dangerouslySetInnerHTML={{
                  __html: props.text,
                }}
              />
              <div className="Button-Container mt-3 ">
                <GradiantButton text={props.ButtonText2} />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            className="content"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            xxl={6}
          >
            <div className="details2">
              <div
                className="tag mb-3"
                dangerouslySetInnerHTML={{
                  __html: props.tag4,
                }}
              />
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: props.title6,
                }}
              />
              <div
                className="text mt-3"
                dangerouslySetInnerHTML={{
                  __html: props.text,
                }}
              />
              <div className="Button-Container mt-3 mb-5  ">
                <GradiantButton text={props.ButtonText2} />
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            xxl={6}
            className="content2"
          >
            <img src={props.randomImage2} alt="" className="img1 rounded " />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlackWhite3;
