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
}
function ItemsListing(props: IProps) {
  return (
    <Container className="ItemsListing-Body">
      <Row>
        <Col>
          <span className="tag">Students Now Get 10% Off</span>
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
              <div className="title">Treat Yourself to Sport​</div>
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
              <div className="option1 me-2 ">SENAKERS</div>
              <div className="option2 me-2 d-flex ">
                SIZE: <article>ALL</article>
              </div>
              <div className="option3  d-flex  ">
                SORT BY:<article> PRICE</article>
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
