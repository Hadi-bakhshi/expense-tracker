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
        className="bg-stone-100 border-none rounded-md my-3 p-2 shadow-lg"
        name="desc"
        type="text"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="Description"
      />
      <input
        className="bg-stone-100 border-none rounded-md my-3 p-2  shadow-lg"
        name="amount"
        type="number"
        onChange={changeHandler}
        value={formValues.amount}
        placeholder="Value"
      />
      <div className="flex flex-row items-center p-1">
        <input
          className="m-2 cursor-pointer text-purple-800"
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          className="m-2 cursor-pointer text-purple-800"
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
        className="bg-purple-900 text-purple-300 font-semibold p-2 rounded-md hover:text-white hover:bg-purple-700"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
