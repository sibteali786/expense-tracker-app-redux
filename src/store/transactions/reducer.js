import { v4 as uuidv4 } from "uuid";

export const initialTransactions = [
  { id: uuidv4(), text: "Flower", amount: -20 },
  { id: uuidv4(), text: "Salary", amount: 300 },
  { id: uuidv4(), text: "Book", amount: -10 },
  { id: uuidv4(), text: "Camera", amount: 150 },
];

export const reducer = (state = initialTransactions, action) => {
  return state;
};

export default reducer;
