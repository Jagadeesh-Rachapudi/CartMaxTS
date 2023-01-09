/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiFillStar, AiOutlineTwitter } from "react-icons/ai";

export interface IProps {
  intro: string;
  hedding: string;
  text: string;
}

function Footer5(props: IProps) {
  return (
    <div className="Footer5-Body">
      <Container>
        <Row className="pt-5">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={4} className="col1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLogo%20(6).png?alt=media&token=be4447f3-58d5-4bac-bc80-6dcde482c05d"
              alt=""
              className="img mb-3"
            />
            <div className="text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </div>
            <div className="mails mt-4 ">
              <div>
                <b>Email: </b> info@chiart.abcdf.com
              </div>
              <div>
                <b>Phone: </b> + 33 323 34522
              </div>
              <div>
                <b>Fax: </b> +33 3467888
              </div>
            </div>
            <div className="Scoials mt-4 ">
              <BsFacebook color="#a1a1a1" size={17} className="me-1" />
              <BsInstagram color="#a1a1a1" size={17} className="me-1 ms-1" />
              <BsYoutube color="#a1a1a1" size={17} className="me-1 ms-1" />
              <AiOutlineTwitter
                color="#a1a1a1"
                size={17}
                className="me-1 ms-1"
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={3} className="col2">
            <div className="hedding">Information</div>
            <div className="links d-flex flex-column mt-4 ">
              <a href="#" className="link">
                About Us
              </a>
              <a href="#" className="link">
                Delivacy Information
              </a>
              <a href="#" className="link">
                Privacy Policy
              </a>
              <a href="#" className="link">
                Terms Policy
              </a>
              <a href="#" className="link">
                Gift Certifictes
              </a>
              <a href="#" className="link">
                Contact Us
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={2} className="col3">
            <div className="hedding">Extras</div>
            <div className="links d-flex flex-column mt-4 ">
              <a href="#" className="link">
                Brands
              </a>
              <a href="#" className="link">
                Gift Certificates
              </a>
              <a href="#" className="link">
                Affiate
              </a>
              <a href="#" className="link">
                Specials
              </a>
              <a href="#" className="link">
                My Account
              </a>
              <a href="#" className="link">
                Returns
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={3} className="col4">
            <div className="hedding">Custom Products</div>
            <div className="review mt-3 ">
              <div className="box"></div>
              <div>
                <div className="stars">
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                </div>
                <div className="title">Acer Aspire E15</div>
                <div className="prices">
                  <div className="price1">$550.00</div>
                  <div className="price2">$700.00</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="review">
              <div className="box"></div>
              <div>
                <div className="stars">
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                  <AiFillStar color="gold" size={15} />
                </div>
                <div className="title">Acer Aspire E15</div>
                <div className="prices">
                  <div className="price1">$550.00</div>
                  <div className="price2">$700.00</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer5;
