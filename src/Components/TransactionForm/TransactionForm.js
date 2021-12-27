import { useState } from "react";

const TransactionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center">
      <input
        className="bg-gray-200 rounded-md my-2 p-1"
        name="desc"
        type="text"
        onChange={changeHandler}
        value={formValues.desc}
      />
      <input
        className="bg-gray-200 rounded-md my-2 p-1"
        name="amount"
        type="number"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <div className="flex flex-row items-center p-1">
        <input
          className="m-2"
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          className="m-2"
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button
        type="submit"
        className="bg-violet-100 text-violet-700 font-semibold p-2 rounded-md hover:text-violet-100 hover:bg-violet-700"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
