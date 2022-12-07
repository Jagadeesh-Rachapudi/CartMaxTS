import React from "react";
import Button from "react-bootstrap/Button";
import { BsFacebook, BsInstagram, BsTwitter, BsSnapchat } from "react-icons/bs";
export interface IProps {
  intro: string;
  hedding: string;
  text: string;
}

function Hedder1(props: IProps) {
  return (
    <div className="Hedder1-Body">
      <div className="container">
        <div className="content d-flex flex-column justify-content-center heght ">
          <div
            className="inrto"
            dangerouslySetInnerHTML={{
              __html: props.intro,
            }}
          />
          <div
            className="hedding"
            dangerouslySetInnerHTML={{
              __html: props.hedding,
            }}
          />
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: props.text,
            }}
          />
          <Button variant="info" className="Button1 mt-2">
            Buy It Now
          </Button>
        </div>
        <div className="d-flex justify-content-end pb-5">
          <BsFacebook className="me-3" />
          <BsInstagram className="me-3" />
          <BsTwitter className="me-3" />
          <BsSnapchat className="me-3" />
        </div>
      </div>
    </div>
  );
}

export default Hedder1;
