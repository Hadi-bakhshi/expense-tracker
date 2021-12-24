import { useState } from "react";
import OverView from "../OverView/OverView";
import TransAction from "../TransAction/TransAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };

  return (
    <section className="container flex flex-col mx-auto bg-white rounded-md">
      <OverView
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransAction transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
