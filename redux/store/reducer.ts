import * as actionTypes from "./actionTypes";

const initialState: productState = {
  products: [
    {
      id: 1,
      title: "Iphone 13",
    },
    {
      id: 2,
      title: "Iphone 14",
    },
  ],
};

const reducer = (
  state: productState = initialState,
  action: productAction
): productState => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      const newProduct: IProduct = {
        id: Math.random(), 
        title: action.product.title,
      };
      return {
        ...state,
        products: state.products.concat(newProduct),
      };
    case actionTypes.REMOVE_PRODUCT:
      const updatedProducts: IProduct[] = state.products.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        products: updatedProducts,
      };
  }
  return state;
};

export default reducer;
