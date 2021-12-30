import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";

const OverView = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="flex justify-around items-center py-2 ">
        <p className="text-stone-400">
          Account Balance:{" "}
          <span className="text-purple-900 font-bold">
            $ {income - expense}
          </span>
        </p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`${
            !isShow
              ? "bg-purple-900 font-semibold px-2 py-1 rounded-md text-purple-200  hover:bg-purple-700 hover:text-white hover:ring-2 ring-purple-900"
              : ""
          } ${
            isShow
              ? " bg-red-50 px-2 py-1 font-semibold rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-red-50"
              : ""
          }`}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransactionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="flex justify-around items-center py-2">
        <div className="flex flex-col items-center  sm:w-1/4 w-full text-stone-500 py-1 bg-stone-100 shadow-xl mx-2 rounded-2xl">
          Expense <span className="font-bold text-red-600">$ {expense}</span>
        </div>
        <div className="flex flex-col  items-center  sm:w-1/4 w-full text-stone-500 py-1 mx-2 bg-stone-100 shadow-xl rounded-2xl">
          Income <span className="font-bold text-green-600">$ {income}</span>
        </div>
      </div>
    </div>
  );
};

export default OverView;
