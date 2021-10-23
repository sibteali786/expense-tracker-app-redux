import { connect } from "react-redux";
import Balance from "../components/Balance";

const mapStateToProps = (state) => {
  const transactions = state.transactions;
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return { total };
};

export const BalanceContainer = connect(mapStateToProps)(Balance);
