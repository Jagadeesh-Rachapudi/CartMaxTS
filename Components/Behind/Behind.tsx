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
function Behind(props: IProps) {
  return <div>Behind</div>;
}

export default Behind;
