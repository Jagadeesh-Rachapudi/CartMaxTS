import { CART } from "../variables";
import { ICart } from "../reducers/cartReducer";

export interface ICartItemAction {
  productName: string;
}

export const updateCart = (cart: ICart) => {
  return {
    type: CART.UPDATE,
    cart,
  };
};
