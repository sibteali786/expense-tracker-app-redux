import { combineReducers, createStore } from "redux";
import transactionReducer from "./transactions/reducer";

export const reducer = combineReducers({
  transactions: transactionReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
