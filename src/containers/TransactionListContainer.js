import { connect } from "react-redux";
import TransactionList from "../components/TransactionList";

const mapStateToProps = (state) => {
  return { transactions: state.transactions };
};

export const TransactionListContainer =
  connect(mapStateToProps)(TransactionList);
