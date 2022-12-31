/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface NewsArticle2Props {
  randomImage1: string;
  randomImage2: string;
  title2: string;
  name: string;
  text2: string;
}

function NewsArticle2(props: NewsArticle2Props) {
  return (
    <div className="NewsArticle2-Body d-flex flex-column">
      <img src={props.randomImage1} alt="" className="img rounded " />
      <div className="avatar ms-5 pt-3 pb-3  d-flex flex-row ">
        <img
          src={props.randomImage2}
          alt=""
          className="avatar rounded-circle"
        />
        <div
          className="name mt-auto mb-auto ms-4"
          dangerouslySetInnerHTML={{
            __html: props.name,
          }}
        />
      </div>
      <div className="lowerBody ps-4 ">
        <div
          className="title2"
          dangerouslySetInnerHTML={{
            __html: props.title2,
          }}
        />
        <div
          className="text2 mt-2 mb-5"
          dangerouslySetInnerHTML={{
            __html: props.text2,
          }}
        />
      </div>
    </div>
  );
}

export default NewsArticle2;
