import React from "react";
import { Transaction } from ".";

export const TransactionList = ({ transactions }) => {

  return (
    <div>
      <div className="text-3xl font-semibold ">History</div>
      <hr />
      <ul className="flex justify-center items-start flex-col space-y-4">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction}></Transaction>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
