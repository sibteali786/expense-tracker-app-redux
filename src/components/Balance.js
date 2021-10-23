import React from "react";

const Balance = ({ total }) => {
  return (
    <div className="text-center">
      <div className="text-gray-600 text-5xl">Your Balance</div>
      <div className="text-gray-400 text-3xl mt-4">${total}</div>
    </div>
  );
};

export default Balance;
