import React from "react";
import { Transaction } from ".";

export const TransactionList = ({ transactions }) => {
  // const transactions = [
  //   { id: 1, text: "Flower", amount: -20 },
  //   { id: 2, text: "Salary", amount: 300 },
  //   { id: 3, text: "Book", amount: -10 },
  //   { id: 4, text: "Camera", amount: 150 },
  // ];

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
