/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  Title1: string;
  ViewAll: string;
  Title2: string;
  UserNames: string;
}

function BlackWhite(props: IProps) {
  return (
    <Container fluid className="BlackWhite-Body mb-5 ">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="p-0">
          <div className="Black">
            <div
              className="title text-center pt-5"
              dangerouslySetInnerHTML={{
                __html: props.Title1,
              }}
            />
            <div
              className="ViewAll text-center mt-2 pb-5"
              dangerouslySetInnerHTML={{
                __html: props.ViewAll,
              }}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="p-0">
          <div className="White">
            <div
              className="title text-center pt-5"
              dangerouslySetInnerHTML={{
                __html: props.Title2,
              }}
            />
            <div
              className="UserNames text-center mt-2 pb-5"
              dangerouslySetInnerHTML={{
                __html: props.UserNames,
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fadds.png?alt=media&token=49115011-9f61-499f-9601-0f567ef234d3"
            alt=""
            className="img mt-5 "
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BlackWhite;
