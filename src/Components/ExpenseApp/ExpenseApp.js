import { useEffect, useState } from "react";
import OverView from "../OverView/OverView";
import TransAction from "../TransAction/TransAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    setTransactions([
      ...transactions,
      { ...formValues, id: Math.floor(Math.random() * 1000) },
    ]);
  };

  const deleteTransaction = (id) => {
    const newTnx = transactions.filter((t) => t.id !== id);
    setTransactions(newTnx);
  }
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="container flex flex-col mx-auto bg-white rounded-md">
      <OverView
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransAction  transactions={transactions} key={transactions.id} deleteTransaction={deleteTransaction} />
    </section>
  );
};

export default ExpenseApp;
