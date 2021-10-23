import { AddTransaction } from "../components";
import { connect } from "react-redux";
import { addNewTransaction } from "../store/transactions/action";

export const mapDispatchToProp = (dispatch) => {
  return {
    onSubmitHandler: (text, amount) =>
      dispatch(addNewTransaction(text, amount)),
  };
};

export const AddTransactionContainer = connect(
  null,
  mapDispatchToProp
)(AddTransaction);
