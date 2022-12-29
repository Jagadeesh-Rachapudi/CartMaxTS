import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  text: string;
}
function RedButton(props: IProps) {
  return (
    <div className="RedBuddton-Body">
      <button
        className="RedButton rounded "
        dangerouslySetInnerHTML={{
          __html: props.text,
        }}
      />
    </div>
  );
}

export default RedButton;
