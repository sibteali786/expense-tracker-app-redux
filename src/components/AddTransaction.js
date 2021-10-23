import React, { useState } from "react";

export const AddTransaction = ({ onSubmitHandler }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault(); // stops submit event to submit form
    onSubmitHandler(text, amount);
    
  };
  return (
    <div>
      <div className="text-3xl font-semibold my-4">Add new transaction</div>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="text-2xl flex justify-center items-start flex-col space-y-4">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            className="p-3 border-2 rounded-md border-gray-400"
            value={text}
            onChange={(e) => setText(e.target.value)} // This allows us to trigger setText upon any change in value we type. e for event
            placeholder="Enter text..."
          />
        </div>
        <div className="text-2xl flex justify-center items-start flex-col space-y-4 mt-4">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            className="p-3 border-2 rounded-md border-gray-400"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="px-4 py-2 border-gray-500 border-2 rounded-md my-4 transition-all hover:bg-gray-800 hover:text-white duration-200 hover:border-transparent">
          Add Transaction
        </button>
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
