import React from "react";
import { TransactionContainer } from "../containers/TransactionContainer";

export const TransactionList = ({ transactions }) => {
  return (
    <div>
      <div className="text-3xl font-semibold ">History</div>
      <hr />
      <ul className="flex justify-center items-start flex-col space-y-4">
        {transactions.map((transaction) => (
          <TransactionContainer
            {...transaction}
            key={transaction.id}
          ></TransactionContainer>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
