export const TRANSACTION_ADDED = "TRANSACTION_ADDED";

export const addNewTransaction = (text, amount) => ({
  type: TRANSACTION_ADDED,
  payload: {
    text,
    amount,
  },
});
