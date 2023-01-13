import React from "react";
export interface IProps {
  text: string;
}

function GoldButton(props: IProps) {
  return (
    <div className="GoldButton-Body">
      <button className="Button">{props.text}</button>
    </div>
  );
}

export default GoldButton;
