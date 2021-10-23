import React from "react";

const Transaction = ({ id, amount, text, remove = () => {} }) => {
  const sign = amount < 0 ? "-" : "+";
  return (
    <div
      className={`${
        amount < 0 ? "bg-red-400" : "bg-green-400"
      } shadow-sm rounded-md flex justify-between items-center hover:scale-105 transition-transform duration-300  transform`}
    >
      <li
        className={` py-3 px-8 flex justify-between items-center w-full space-x-28  `}
      >
        <div>{text}</div>
        <span>
          {sign}${Math.abs(amount)}
        </span>
      </li>
      <button
        className="bg-gray-900 rounded-r-md px-4 py-3 text-white"
        onClick={remove}
      >
        x
      </button>
    </div>
  );
};

export default Transaction;
