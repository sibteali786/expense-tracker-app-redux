export const TRANSACTION_ADDED = "TRANSACTION_ADDED";
export const TRANSACTION_REMOVED = "TRANSACTION_REMOVED";

export const addNewTransaction = (text, amount) => ({
  type: TRANSACTION_ADDED,
  payload: {
    text,
    amount,
  },
});
export const removeTransaction = (id) => ({
  type: TRANSACTION_REMOVED,
  payload: {
    id,
  },
});
