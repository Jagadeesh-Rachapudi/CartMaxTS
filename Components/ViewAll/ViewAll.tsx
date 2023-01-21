import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import { useEffect } from "react";
import HomeFashionItem, {
  IProps as HomeFashionItemProps,
} from "../../Utils/HomeFashionItem/HomeFashionItem";
import HomeFashionItemData from "../../Utils/HomeFashionItem/HomeFashionItem.json";

import Spinner from "react-bootstrap/Spinner";

export interface IProps {
  options: string[];
  Items: string[];
  prev: string;
  next: string;
  dummy: { id: number; productname: string; price: number }[];
}

function ViewAll(props: IProps) {
  const [active, setActive] = useState(100);
  const [active2, setActive2] = useState(100);
  const [activePage, setActivePage] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  let items1 = [];
  let items2 = [];

  for (let number = 1; number <= 3; number++) {
    items1.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  for (let number = 5; number <= 7; number++) {
    items2.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Container className="ViewAll-Body">
      <Row>
        <Col className="d-flex justify-content-between">
          <div className="options">
            {props.options.map((e, i) => (
              <div
                key={i}
                onClick={() => {
                  if (active == i) setActive(100);
                  else setActive(i);
                }}
                className={active == i ? "option active " : "option"}
                dangerouslySetInnerHTML={{
                  __html: e,
                }}
              />
            ))}
          </div>
          <div className="show">
            Showing {activePage * 15 - 14} to {activePage * 15} of 243 products
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Container-Box">
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
            ) : (
              <div className="Container-Box">
                {props.dummy.map(
                  (
                    product: { id: number; productname: string; price: number },
                    i
                  ) => (
                    <div key={i} className="m-1">
                      <HomeFashionItem
                        {...(HomeFashionItemData as HomeFashionItemProps)}
                        imageTitle={product.productname}
                        price={product.price}
                        prodId={product.id}
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between mt-5 ">
          <div
            onClick={() => {
              if (active2 == 2) setActive2(100);
              else setActive2(2);
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 3000);
            }}
            className={active2 == 2 ? "prev active2 " : "prev"}
            dangerouslySetInnerHTML={{
              __html: props.prev,
            }}
          />
          <div className="pagination-Container d-flex">
            <Pagination>{items1}</Pagination>
            <Pagination>
              <Pagination.Ellipsis />
            </Pagination>
            <Pagination>{items2}</Pagination>
          </div>
          <div
            onClick={() => {
              if (active2 == 1) setActive2(100);
              else setActive2(1);
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 3000);
            }}
            className={active2 == 1 ? "next active2 " : "next"}
            dangerouslySetInnerHTML={{
              __html: props.next,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ViewAll;
