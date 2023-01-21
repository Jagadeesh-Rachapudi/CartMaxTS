import { CART } from "../variables";
import { WISHLIST } from "../variables";
import { AnyAction } from "redux";

export interface ICartItem {
  productName: string;
  pId: number;
  pPrice: number;
  quantity: number;
}

export interface IWishItem {
  productName: string;
  pId: number;
  pPrice: number;
}

export interface ICart {
  products: Array<ICartItem>;
}

export interface IWishList {
  list: Array<IWishItem>;
}

const initialCartState: ICart = { products: [] };

const initialWhislistState: IWishList = { list: [] };

const cartReducer = (state = initialCartState, action: AnyAction): ICart => {
  switch (action.type) {
    case CART.UPDATE:
      return action.cart;
    default:
      return state;
  }
};

export const listReducer = (
  state = initialWhislistState,
  action: AnyAction
): IWishList => {
  switch (action.type) {
    case WISHLIST.UPDATE:
      return action.list;
    default:
      return state;
  }
};

export default cartReducer;
