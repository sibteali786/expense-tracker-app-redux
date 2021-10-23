import { v4 as uuidv4 } from "uuid";
import { TRANSACTION_ADDED, TRANSACTION_REMOVED } from "./action";

export const initialTransactions = [
  { id: uuidv4(), text: "Flower", amount: -20 },
  { id: uuidv4(), text: "Salary", amount: 300 },
  { id: uuidv4(), text: "Book", amount: -10 },
  { id: uuidv4(), text: "Camera", amount: 150 },
];

export const reducer = (state = initialTransactions, action) => {
  if (action.type === TRANSACTION_ADDED) {
    const transaction = { id: uuidv4(), ...action.payload };
    return [...state, transaction];
  }
  if (action.type === TRANSACTION_REMOVED) {
    return state.filter((item) => item.id !== action.payload.id);
  }
  return state;
};

export default reducer;
