/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../redux/store";
import { updatelist } from "../redux/actions/cartActions";
import RedButton from "../Utils/RedButton/RedButton";

function WhishList() {
  const dispatch = useDispatch();
  const list = useSelector((state: IStore) => state.list.list);

  return (
    <div>
      {list.map((e, i) => (
        <div key={i} className="cartSideBar">
          <hr />
          <div className="d-flex">
            <div>
              <img
                src="https://picsum.photos/100"
                alt=""
                className="img rounded "
              />
            </div>
            <div>
              <div className=" ms-5 product-name">{e.productName}</div>
              <div
                className="ms-4 mt-3"
                onClick={() => {
                  dispatch(
                    updatelist({
                      list: list.filter((product) => product.pId !== e.pId),
                    })
                  );
                }}
              >
                <RedButton text="Remove from Whishlist" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhishList;
