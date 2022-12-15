/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RxDotFilled } from "react-icons/rx";

export interface IProps {
  options: string[];
  tag: string;
  title: string;
  content: string;
  button: string;
}

function Living(props: IProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="Living-Body mt-5 ">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="Column-1"
          >
            <div className="d-flex flex-column">
              <div className="links d-flex flex-row justify-content-between">
                {props.options.map((str, id) => (
                  <a
                    key={id}
                    href="#"
                    onClick={() => {
                      if (active == id) setActive(100);
                      else setActive(id);
                    }}
                    className={`${active == id ? "active link" : " link "}`}
                  >
                    <RxDotFilled
                      color={`${active == id ? "#F76954" : "#171515"}`}
                      size={20}
                      className="mt-0 mb-1"
                    />
                    {str}
                  </a>
                ))}
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FChair.png?alt=media&token=0b67607a-e57b-4c20-8d7a-e2c1ab15e228"
                alt=""
                className="img d-none d-md-block d-lg-block d-xl-block "
                height={200}
                width={200}
              />
              <div className="lightbox d-flex flex-column justify-content-center ">
                <div
                  className="tag ms-5"
                  dangerouslySetInnerHTML={{
                    __html: props.tag,
                  }}
                />
                <div
                  className="title ms-5  w-50"
                  dangerouslySetInnerHTML={{
                    __html: props.title,
                  }}
                />
                <div
                  className="content ms-5 w-75"
                  dangerouslySetInnerHTML={{
                    __html: props.content,
                  }}
                />
                <div
                  className="Button ms-5"
                  dangerouslySetInnerHTML={{
                    __html: props.button,
                  }}
                />
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="Column-2"
          >
            <div className="darkbox"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Living;
