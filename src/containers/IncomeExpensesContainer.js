import { connect } from "react-redux";
import { IncomeExpenses } from "../components";

export const mapStateToProps = (state) => {
  const transactions = state.transactions;
  const amounts = transactions.map((transaction) =>
    parseInt(transaction.amount, 10)
  );
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return { income, expense };
};

export const IncomeExpensesContainer = connect(mapStateToProps)(IncomeExpenses);
