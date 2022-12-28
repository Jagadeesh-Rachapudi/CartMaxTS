/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube, BsGoogle } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { IoMdCall } from "react-icons/io";

export interface IProps {
  src: string;
  text: string;
  hedding1: string;
  hedding2: string;
  address: string;
  mail: string;
  Phone: string;
  Fax: string;
  avatars: string[];
}

function Footer2(props: IProps) {
  return (
    <div className="Footer2Body">
      <Container className="Footer2-container pt-5" fluid="lg">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} className="Col1">
            <img src={props.src} alt="" className="Logo" />
            <div
              className="text mt-3 mb-3"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
            <div className="socials d-felx flex-row">
              <BsFacebook size={20} color="#CCCCCC" className="me-3 " />
              <BsTwitter size={20} color="#CCCCCC" className="me-3 " />
              <BsYoutube size={20} color="#CCCCCC" className="me-3 " />
              <BsGoogle size={20} color="#CCCCCC" className="me-3 " />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} className="Col2">
            <div
              className="hedding"
              dangerouslySetInnerHTML={{
                __html: props.hedding1,
              }}
            />
            <div className="Links mt-3 ">
              <div className="Link-Container d-flex flex-row ">
                <GoLocation
                  size={20}
                  color="#CCCCCC"
                  className="mt-auto mb-auto me-2 "
                />
                <div
                  className="textcontent"
                  dangerouslySetInnerHTML={{
                    __html: props.address,
                  }}
                />
              </div>
              <div className="Link-Container d-flex flex-row ">
                <AiOutlineMail
                  size={20}
                  color="#CCCCCC"
                  className="mt-auto mb-auto me-2 "
                />
                <div
                  className="textcontent"
                  dangerouslySetInnerHTML={{
                    __html: props.mail,
                  }}
                />
              </div>
              <div className="Link-Container d-flex flex-row ">
                <IoMdCall
                  size={20}
                  color="#CCCCCC"
                  className="mt-auto mb-auto me-2 "
                />
                <div
                  className="textcontent"
                  dangerouslySetInnerHTML={{
                    __html: props.Phone,
                  }}
                />
              </div>
              <div className="Link-Container d-flex flex-row ">
                <GoLocation
                  size={20}
                  color="#CCCCCC"
                  className="mt-auto mb-auto me-2 "
                />
                <div
                  className="textcontent"
                  dangerouslySetInnerHTML={{
                    __html: props.Fax,
                  }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
            <div
              className="hedding hedding2"
              dangerouslySetInnerHTML={{
                __html: props.hedding2,
              }}
            />
            <div className="avatars">
              {props.avatars.map((e, i) => (
                <img key={i} src={e} alt="" className="m-2" />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer2;
