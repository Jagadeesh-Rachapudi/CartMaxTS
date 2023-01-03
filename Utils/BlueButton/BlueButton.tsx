import React from "react";

export interface IProps {
  text: string;
}

function BlueButton(props: IProps) {
  return (
    <div className="BlueButton-Body">
      <button className="Button">{props.text}</button>
    </div>
  );
}

export default BlueButton;
