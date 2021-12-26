import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";

const OverView = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="flex justify-around items-center py-2 ">
        <p>Balance : $ {income - expense}</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`${
            !isShow
              ? "bg-violet-500 font-semibold px-2 py-1 rounded-md text-violet-100 hover:bg-violet-700 hover:ring-2 ring-blue-300"
              : ""
          } ${
            isShow
              ? " bg-red-50 px-2 py-1 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-red-50"
              : ""
          }`}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionForm addTransaction={addTransaction} />}
      <div className="flex justify-around items-center py-2">
        <div className="flex flex-col items-center w-full mx-2 border-2 border-solid border-gray-300">
          Expense <span className="font-bold text-red-600">$ {expense}</span>
        </div>
        <div className="flex flex-col  items-center w-full mx-2 border-2 border-solid border-gray-300">
          Income <span className="font-bold text-green-600">$ {income}</span>
        </div>
      </div>
    </div>
  );
};

export default OverView;
