import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

export interface IProps {
  text: string;
  color: string;
}

function TransButton(props: IProps) {
  return (
    <div className="TransButton-Body">
      <button className="Button" style={{ color: props.color }}>
        <div className="m-auto" style={{ color: props.color }}>
          {props.text}
          <BsFillPlayFill size={20} color={props.color} className="ms-2" />
        </div>
      </button>
    </div>
  );
}

export default TransButton;
