import { combineReducers } from "redux";
import cartReducer, { listReducer } from "./cartReducer";

const reducers = combineReducers({
  cart: cartReducer,
  list: listReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
