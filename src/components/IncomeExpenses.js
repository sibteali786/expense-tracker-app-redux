import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="flex justify-center items-center space-x-20 bg-gray-50  shadow-md">
      <div className="text-3xl pl-10 py-5">
        <h4>Income</h4>
        <p className="text-green-600 my-2">$400</p>
      </div>

      <div className="text-3xl pr-10 py-5">
        <h4>Expense</h4>
        <p className="text-red-500 my-2">$100</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
