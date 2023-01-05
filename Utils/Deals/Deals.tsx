/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState, useEffect } from "react";

export interface IProps {
  tag: string;
  Count: string;
  title2: string;
  Subtitle: string;
  src: string;
  price: string;
  price2: string;
  hrs: string;
  mins: string;
  secs: string;
  Count1: string;
  Count2: string;
  Colon: string;
}

function Deals(props: IProps) {
  const [day, setDay] = useState(12);
  const [hrs, setHrs] = useState(36);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(3);
  useEffect(() => {
    setTimeout(() => {
      setSec((sec) => sec - 1);
      if (sec == 0) {
        setSec(59);
        if (min > 0) {
          setMin(min - 1);
        }
        if (min == 0) {
          setMin(59);
          if (hrs > 0) {
            setHrs(hrs - 1);
          }
          if (hrs == 0) {
            setHrs(59);
            if (day > 0) {
              setDay(day - 1);
            }
            if (day == 0) {
              setDay(9);
              setHrs(12);
              setMin(18);
              setSec(39);
            }
          }
        }
      }
    }, 1000);
  });
  return (
    <div className="Deals-Body">
      <div className="p1">
        <div>
          <div className=""></div>
          <div
            className="tag2"
            dangerouslySetInnerHTML={{
              __html: props.tag,
            }}
          />
        </div>
        <div className="image-Container">
          <img src={props.src} className="img" />
        </div>
      </div>
      <div className="p2">
        <div className="stars-Count">
          <div>
            <div className="stars">
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiOutlineStar color="grey" />
            </div>
          </div>
          <div>
            <div
              className="Count"
              dangerouslySetInnerHTML={{
                __html: props.Count,
              }}
            />
          </div>
        </div>
        <div>
          <div
            className="title2"
            dangerouslySetInnerHTML={{
              __html: props.title2,
            }}
          />
        </div>
        <div>
          <div className="prices">
            <div
              className="price"
              dangerouslySetInnerHTML={{
                __html: props.price,
              }}
            />
            <div
              className="price2"
              dangerouslySetInnerHTML={{
                __html: props.price2,
              }}
            />
          </div>
        </div>
        <hr />
        <div>
          <div
            className="Sub-Title"
            dangerouslySetInnerHTML={{
              __html: props.Subtitle,
            }}
          />
        </div>
        <div>
          <div className="time">
            <div className="hrs-box">
              <div className="hrs">{hrs}</div>
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: props.hrs,
                }}
              />
            </div>
            <div
              className="colon"
              dangerouslySetInnerHTML={{
                __html: props.Colon,
              }}
            />
            <div className="hrs-box">
              <div className="hrs">{min}</div>
              <div
                className=" ms-2 text"
                dangerouslySetInnerHTML={{
                  __html: props.mins,
                }}
              />
            </div>
            <div
              className="colon"
              dangerouslySetInnerHTML={{
                __html: props.Colon,
              }}
            />
            <div className="hrs-box">
              <div className="hrs">{sec}</div>
              <div
                className=" ms-2 text"
                dangerouslySetInnerHTML={{
                  __html: props.secs,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="Counts">
            <div
              className="Count1"
              dangerouslySetInnerHTML={{
                __html: props.Count1,
              }}
            />
            <div
              className="Count2"
              dangerouslySetInnerHTML={{
                __html: props.Count2,
              }}
            />
          </div>
        </div>
        <div>
          <div className="progress">
            <div className="progress-bar" role="progressbar">
              <span className="sr-only"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
