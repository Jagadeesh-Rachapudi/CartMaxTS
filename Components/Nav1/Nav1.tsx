/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { BsSearch, BsPerson, BsBag, BsHeart } from "react-icons/bs";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu } from "react-icons/ai";

export interface IProps {
  navOptions: { text: string; link: string }[];
}

function Nav1(props: IProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container d-flex flex-row justify-content-between ">
      {/* menu start */}
      <div className="d-block  d-lg-none d-xl-none d-xxl-none ">
        <Button
          variant="light"
          className="d-lg-none h-75 mt-auto mb-auto p-2 "
          onClick={handleShow}
        >
          <AiOutlineMenu />
        </Button>
        <Offcanvas show={show} onHide={handleClose} responsive="lg">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column d-lg-none d-xl-none d-xxl-none ">
            {props.navOptions.map(
              (navOption: { text: string; link: string }, i) => (
                <Nav.Link href={navOption.link} className="mb-3" key={i}>
                  {navOption.text}
                </Nav.Link>
              )
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      {/* menu end  */}

      <div className="logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/catmax2-36a5f.appspot.com/o/Furniture%2FLogo.png?alt=media&token=6dd2fb25-170b-4b1b-bb60-dc0cc8ba3504"
          alt=""
        />
      </div>
      <div className="links d-none d-lg-flex d-xl-flex d-xxl-flex flex-row mt-auto mb-auto ">
        {props.navOptions.map(
          (navOption: { text: string; link: string }, i) => (
            <Nav.Link href={navOption.link} className="me-3" key={i}>
              {navOption.text}
            </Nav.Link>
          )
        )}
      </div>
      <div className="d-flex flex-row mt-auto mb-auto  ">
        <Nav.Link href="#link" className="me-0 me-md-3">
          <BsSearch size={17} />
        </Nav.Link>
        <Nav.Link href="#link" className="me-1 me-md-2">
          <BsPerson size={17} />
        </Nav.Link>
        <Nav.Link href="#link" className="me-1 me-md-2">
          <BsHeart size={17} />
        </Nav.Link>
        <Nav.Link href="#link" className="me-1 me-md-2 ">
          <BsBag size={17} />
        </Nav.Link>
      </div>
    </div>
  );
}

export default Nav1;
