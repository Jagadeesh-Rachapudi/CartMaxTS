import React from "react";

export interface IProps {
  text: string;
}

function BrownButton(props: IProps) {
  return (
    <div className="BrownButton-Body">
      <button
        className="Button"
        dangerouslySetInnerHTML={{
          __html: props.text,
        }}
      />
    </div>
  );
}

export default BrownButton;
