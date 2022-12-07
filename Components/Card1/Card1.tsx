/* eslint-disable @next/next/no-img-element */
import React from "react";

import Card from "react-bootstrap/Card";

export interface IProps {
  data: { link: string; hedding: string; content: string }[];
}

function Card1(props: IProps) {
  return (
    <div className="Card1-Body">
      <div className="container">
        <Card className=" Cards-box w-100 ms-auto me-auto ">
          <Card.Body>
            <div className="Card-Body me-1 ms-1 ">
              {props.data.map(
                (d: { link: string; hedding: string; content: string }, i) => (
                  <div key={i} className="d-flex flex-row ">
                    <img src={d.link} key={i} alt="" width={75} height={75} />
                    <div className="d-flex flex-column mt-auto mb-auto">
                      <div className="Card-hedding">{d.hedding}</div>
                      <div className="Card-text">{d.content}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Card1;
