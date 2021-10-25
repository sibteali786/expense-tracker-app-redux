import { createSelector } from "reselect";

export const selectTransactions = (state) => {
  return { transactions: state.transactions };
};
console.log(selectTransactions);
export const selectAmount = selectTransactions.map((transaction) =>
  parseInt(transaction.amount, 10)
);

export const selectTotalTransactions = createSelector(
  [selectAmount],
  (transactions) =>
    transactions.reduce((sum, item) => (sum += item.amount), 0).toFixed(2)
);
