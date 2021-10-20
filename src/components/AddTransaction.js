import React from "react";

export const AddTransaction = () => {
  const onSubmit = (e) => {
    e.preventDefault(); // stops submit event to submit form
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

/* from this file we are using states to set and change new transaction as we do nt have any data base to keep record or
History of the Data Base */
/* 
1: So whenever we submit a transaction we save it in a State. 
2: We also need some initial State.*/
