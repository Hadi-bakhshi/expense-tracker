const TransactionForm = () => {
  return (
    <form className="flex flex-col items-center">
      <input className="bg-gray-200 rounded-md my-2 p-1" name="desc" type="text" />
      <input className="bg-gray-200 rounded-md my-2 p-1" name="amount" type="number" />
      <div className="flex flex-row items-center p-1">
          <input className="m-2" type="radio" value="expense" name="type"/>
          <label>Expense</label>
          <input className="m-2" type="radio" value="income" name="type"/>
          <label>Income</label>
      </div>
      <button>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
