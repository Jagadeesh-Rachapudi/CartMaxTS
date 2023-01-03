/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  tag: string;
  title: string;
  hedding1: string;
  hedding2: string;
  hedding3: string;
  text: string;
  addimg: string;
}
function Hedder2(props: IProps) {
  return <div className="Hedder2-Body"> Hedder2</div>;
}

export default Hedder2;
