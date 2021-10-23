import { connect } from "react-redux";
import Transaction from "../components/Transaction";
import { removeTransaction } from "../store/transactions/action";

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeTransaction(ownProps.id)),
  };
};

export const TransactionContainer = connect(
  null,
  mapDispatchToProps
)(Transaction);
