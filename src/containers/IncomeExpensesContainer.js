import { connect } from "react-redux";
import { IncomeExpenses } from "../components";

export const mapStateToProps = (state) => {
  return { transactions: state.transactions };
};

export const IncomeExpensesContainer = connect(mapStateToProps)(IncomeExpenses);
