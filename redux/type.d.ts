interface IProduct {
  id: number;
  title: string;
}
type productState = {
  products: IProduct[];
};
type productAction = {
  type: string;
  product: IProduct;
};

type DispatchType = (args: productAction) => productAction;

// import redux from "redux";
// const store = redux.createStore("redux");

// function buyProduct() {
//   return {
//     type: BUY_PRODUCT,
//     info: "Buying the product",
//   };
// }

// const initialState = {
//   products: 10,
// };

// const reducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case BUY_PRODUCT:
//       return {
//         ...state,
//         products: state.products - 1,
//       };
//     default:
//       return state;
//   }
// };

// console.log("Inisitial State", store.getState());
