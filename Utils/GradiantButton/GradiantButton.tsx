import React from "react";

export interface IProps {
  text: string;
}

function GradiantButton(props: IProps) {
  return (
    <div className="GradiantButton-Body">
      <button className="Button">{props.text}</button>
    </div>
  );
}

export default GradiantButton;
