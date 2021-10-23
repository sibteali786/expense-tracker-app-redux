import { createSelector } from "reselect";

export const selectTransactions = (state) => state.transactions;

export const selectTotalTransactions = createSelector(
  [selectTransactions],
  (transactions) =>
    transactions.reduce((sum, item) => (sum += item.amount), 0).toFixed(2)
);
