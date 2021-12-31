import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";


const TransAction = ({ transactions, deleteTransaction }) => {
  


  const [searchItem, setSearchItem] = useState("");
  const [filterTnx, setFilterTnx] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilterTnx(transactions);
      return;
    }
    const filteredTa = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilterTnx(filteredTa);
  };
  const handleChange = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  if (!transactions.length)
    return (
      <div className="flex flex-col items-center justify-center mt-8 text-purple-900 font-semibold "><h3>Click On 'Add' Button To Add Transaction</h3>
      <p className="text-stone-400 font-medium">Developed By <a href="https://github.com/Hadi-bakhshi" target="_blank" rel="noreferrer">Hadi Bakhshi</a></p>
      </div>
    );

  return (
    <>
      <input
        className="search bg-gray-100 m-1 p-2 rounded-md block "
        type="text"
        value={searchItem}
        onChange={handleChange}
        placeholder="Search"
      />
      <section className="grid grid-cols-2 grid-row-4 gap-4 sm:grid-cols-3">
        {filterTnx.length
          ? filterTnx.map((t) => (
              <div
                key={t.id}
                className={`${"flex flex-col items-center justify-between border-l-8 border-green-600 rounded-md shadow-lg p-2 my-2 mx-1  font-semibold"} ${
                  t.type === "expense" ? "expense-color" : "income-color"
                }`}
                style={{ borderLeft: t.type === "expense" && "8px solid red" }}
              >
                <span className="text-stone-500 pt-1">{t.desc}</span>
                <span className="text-purple-900 font-bold pt-1">$ {t.amount}</span>
                <button onClick={() => deleteTransaction(t.id)} className="text-red-400 pt-2"><FaTrashAlt/></button>
              </div>
            ))
          : " No results"}
      </section>
    </>
  );
};

export default TransAction;
