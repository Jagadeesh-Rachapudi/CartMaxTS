import { CART } from "../variables";
import { WISHLIST } from "../variables";
import { ICart } from "../reducers/cartReducer";
import { IWishList } from "../reducers/cartReducer";

export interface ICartItemAction {
  productName: string;
}

export interface IWishListAction {
  productName: string;
}

export const updateCart = (cart: ICart) => {
  return {
    type: CART.UPDATE,
    cart,
  };
};

export const updatelist = (list: IWishList) => {
  return {
    type: WISHLIST.UPDATE,
    list,
  };
};
