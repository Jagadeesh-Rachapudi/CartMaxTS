import * as actionTypes from "./actionTypes";

export function addProduct(product: IProduct) {
  const action: productAction = {
    type: actionTypes.ADD_PRODUCT,
    product,
  };

  return simulateHttpRequest(action);
}

export function removeProduct(product: IProduct) {
  const action: productAction = {
    type: actionTypes.ADD_PRODUCT,
    product,
  };
  return simulateHttpRequest(action);
}
export function simulateHttpRequest(action: productAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
