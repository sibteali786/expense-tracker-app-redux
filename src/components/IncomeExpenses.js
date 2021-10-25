import React from "react";

const IncomeExpenses = ({ transactions }) => {
  const amounts = transactions.map((transaction) =>
    parseInt(transaction.amount, 10)
  );
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="flex justify-center items-center space-x-20 bg-gray-50  shadow-md">
      <div className="text-3xl pl-10 py-5">
        <h4>Income</h4>
        <p className="text-green-600 my-2">${income}</p>
      </div>

      <div className="text-3xl pr-10 py-5">
        <h4>Expense</h4>
        <p className="text-red-500 my-2">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
