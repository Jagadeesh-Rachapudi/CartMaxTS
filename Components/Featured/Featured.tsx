import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IProps {
  tag: string;
  title: string;
  names: string[];
  TimmerTag: string;
  Hedding: string;
  Content: string;
  DAYS: string;
  HOURS: string;
  MINUTES: string;
  SECONDS: string;
  Button1: string;
  CardHedding: string;
  CardTag: string;
  ShoesImages: string;
  ColorsText: string;
  Price1: string;
  Price2: string;
  Size: string;
  UK: string;
  Button2: string;
}

function Featured(props: IProps) {
  return <div>Featured</div>;
}

export default Featured;
