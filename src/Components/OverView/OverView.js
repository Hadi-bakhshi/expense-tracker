import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";

const OverView = ({ income, expense }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="flex justify-around items-center py-2 ">
        <p>Balance : {income - expense}</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className="bg-zinc-600 px-2 rounded-md text-white"
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionForm/>}
      <div className="flex justify-around items-center py-2">
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </div>
  );
};

export default OverView;
