import { combineReducers } from "redux";
import { PagesReducer } from "./pages";
import { productsReducer } from "./products";
import { slidersReducer } from "./sliders";
import { userReducer } from './users';


export const reducers = combineReducers({
   sliders: slidersReducer,
   user: userReducer,
   products: productsReducer,
   pages: PagesReducer
});
