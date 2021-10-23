import { connect } from "react-redux";
import { Balance } from "../components";
// import { selectTotalTransactions } from "../store/transactions/selector";

export const mapStateToProps = (state) => {
  //   const total = selectTotalTransactions(state);
  const transactions = state.transactions;
  const amount = transactions.map((transaction) =>
    parseInt(transaction.amount, 10)
  );
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return { total };
};

export const BalanceContainer = connect(mapStateToProps)(Balance);
