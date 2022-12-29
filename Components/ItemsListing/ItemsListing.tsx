import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ShoesItem, {
  IProps as ShoesItemProps,
} from "../../Utils/ShoesItem/ShoesItem";
import ShoesItemsData from "../../Utils/ShoesItem/ShoesItem.json";

export interface IProps {
  Tag: string;
  title: string;
  Option1: string;
  a1: string;
  a2: string;
  Size: string;
  Sort: string;
}
function ItemsListing(props: IProps) {
  return (
    <Container className="ItemsListing-Body" id="ShoesShop">
      <Row>
        <Col>
          <span className="tag">{props.Tag}</span>
          <Row>
            <Col
              className="title-row d-flex flex-row"
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
            >
              <div className="title"></div>
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: props.title,
                }}
              />
            </Col>
            <Col
              className="options d-flex flex-row "
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
            >
              <div
                className="option1 me-2 "
                dangerouslySetInnerHTML={{
                  __html: props.Option1,
                }}
              />
              <div className="option2 me-2 d-flex ">
                {props.Size}
                <article
                  dangerouslySetInnerHTML={{
                    __html: props.a1,
                  }}
                />
              </div>
              <div className="option3  d-flex  ">
                {props.Sort}
                <article
                  dangerouslySetInnerHTML={{
                    __html: props.a2,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <div className="Container-Box">
          <div className="shoesItemBox mt-3">
            <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
          </div>
          <div className="mt-3">
            <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
          </div>
          <div className="mt-3">
            <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
          </div>
          <div className="mt-3">
            <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
          </div>
          <div className="mt-3">
            <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
          </div>
          <div className="mt-3">
            <ShoesItem {...(ShoesItemsData as ShoesItemProps)} />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default ItemsListing;
