import { AddTransaction } from "../components";
import { connect } from "react-redux";
import { addNewTransaction } from "../store/transactions/action";
import { bindActionCreators } from "redux";

export const mapDispatchToProp = (dispatch) => {
  return bindActionCreators(
    {
      onSubmitHandler: (text, amount) => addNewTransaction(text, amount),
    },
    dispatch
  );
};

export const AddTransactionContainer = connect(
  null,
  mapDispatchToProp
)(AddTransaction);
