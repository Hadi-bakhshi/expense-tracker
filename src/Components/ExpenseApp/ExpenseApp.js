import { useState } from "react";
import TransAction from "../TransAction/TransAction";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const[transactions, setTransactions] = useState([]);
  return (
    <section className="container flex flex-col mx-auto bg-white rounded-md">
      <div className="flex justify-around items-center py-2 ">
        <p>Balance : {income - expense}</p>
        <button className="bg-zinc-600 px-2 rounded-md text-white">
          Add
        </button>
      </div>
      <div className="flex justify-around items-center py-2">
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
      <TransAction transactions={transactions}/>
    </section>
  );
};

export default ExpenseApp;
