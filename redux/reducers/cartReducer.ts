import { CART } from "../variables";
import { AnyAction } from "redux";

export interface ICartItem {
  productName: string;
}

export interface ICart {
  products: Array<ICartItem>;
}

const initialCartState: ICart = { products: [] };

const cartReducer = (state = initialCartState, action: AnyAction): ICart => {
  switch (action.type) {
    case CART.UPDATE:
      return action.cart;
    default:
      return state;
  }
};

export default cartReducer;
