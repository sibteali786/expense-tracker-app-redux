import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="flex justify-center items-center space-x-20 bg-gray-50 p-10 w-1/4">
      <div className="text-3xl">
        <h4>Income</h4>
        <p className="text-green-600">$400</p>
      </div>

      <div className="text-3xl">
        <h4>Expense</h4>
        <p className="text-red-500">$100</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
