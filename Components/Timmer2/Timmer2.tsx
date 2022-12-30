/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export interface IProps {
  data: {
    tag: string;
    title: string;
    link: string;
    color: string;
    src: string;
  }[];
}

function Timmer2(props: IProps) {
  return <div>Timmer2</div>;
}

export default Timmer2;
