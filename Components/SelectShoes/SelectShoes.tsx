/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
export interface IProps {
  src1: string;
  Title: string;
  price: string;
  text: string;
  Color: string;
  Size: string;
  UK: string;
  Button: string;
  src2: string;
}

function SelectShoes(props: IProps) {
  return (
    <Container className="SelectShoes-Body p-5 " fluid="xl">
      <Row className="p-0">
        <Col className="p-0" xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
          <div className="tag">
            <span>Students Now Get 10% Off</span>
          </div>
          <div className="title-viewMore">
            <div className="title">Treat Yourself to Sport</div>
            <div className="viewMore">
              <a href="#" className=" mt-auto mb-auto ms-auto">
                View More
              </a>
            </div>
          </div>
          <div className="Container-Box">
            <Card className="m-2">
              <Card.Body className="d-flex flex-row mt-3 mb-3 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fvaporfly-4-flyknit-running-shoe-2JsJlX.png?alt=media&token=44a02d01-41f3-46ba-8781-fa4f76d504e5"
                  alt=""
                  className="img"
                />
                <div className="Details ms-3 ">
                  <div className="stars d-flex flex-row ">
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <BsStarHalf color="black" size={17} />
                  </div>
                  <div className="card-title">Nike Air Force 1</div>
                  <div className="price">$72.30</div>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Body className="d-flex flex-row mt-3 mb-3 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fvaporfly-4-flyknit-running-shoe-2JsJlX.png?alt=media&token=44a02d01-41f3-46ba-8781-fa4f76d504e5"
                  alt=""
                  className="img"
                />
                <div className="Details ms-3 ">
                  <div className="stars d-flex flex-row ">
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <BsStarHalf color="black" size={17} />
                  </div>
                  <div className="card-title">Nike Air Force 1</div>
                  <div className="price">$72.30</div>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Body className="d-flex flex-row mt-3 mb-3 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fvaporfly-4-flyknit-running-shoe-2JsJlX.png?alt=media&token=44a02d01-41f3-46ba-8781-fa4f76d504e5"
                  alt=""
                  className="img"
                />
                <div className="Details ms-3 ">
                  <div className="stars d-flex flex-row ">
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <BsStarHalf color="black" size={17} />
                  </div>
                  <div className="card-title">Nike Air Force 1</div>
                  <div className="price">$72.30</div>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Body className="d-flex flex-row mt-3 mb-3 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fvaporfly-4-flyknit-running-shoe-2JsJlX.png?alt=media&token=44a02d01-41f3-46ba-8781-fa4f76d504e5"
                  alt=""
                  className="img"
                />
                <div className="Details ms-3 ">
                  <div className="stars d-flex flex-row ">
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <BsStarHalf color="black" size={17} />
                  </div>
                  <div className="card-title">Nike Air Force 1</div>
                  <div className="price">$72.30</div>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Body className="d-flex flex-row mt-3 mb-3 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fvaporfly-4-flyknit-running-shoe-2JsJlX.png?alt=media&token=44a02d01-41f3-46ba-8781-fa4f76d504e5"
                  alt=""
                  className="img"
                />
                <div className="Details ms-3 ">
                  <div className="stars d-flex flex-row ">
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <BsStarHalf color="black" size={17} />
                  </div>
                  <div className="card-title">Nike Air Force 1</div>
                  <div className="price">$72.30</div>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Body className="d-flex flex-row mt-3 mb-3 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fvaporfly-4-flyknit-running-shoe-2JsJlX.png?alt=media&token=44a02d01-41f3-46ba-8781-fa4f76d504e5"
                  alt=""
                  className="img"
                />
                <div className="Details ms-3 ">
                  <div className="stars d-flex flex-row ">
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <AiFillStar color="black" size={17} />
                    <BsStarHalf color="black" size={17} />
                  </div>
                  <div className="card-title">Nike Air Force 1</div>
                  <div className="price">$72.30</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className="adds" xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2Fphoto_6151953744695243422_y.jpg?alt=media&token=01ce80a8-464c-485b-af0b-edf1a25edd54"
            alt=""
            className="img2"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SelectShoes;
