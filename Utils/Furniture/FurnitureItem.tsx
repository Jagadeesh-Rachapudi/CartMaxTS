import React from "react";

export interface IProps {
  tag: string;
  title: string;
}
function FurnitureItem(props: IProps) {
  return <div className="FurnitureItem-Body">FurnitureItem</div>;
}

export default FurnitureItem;
