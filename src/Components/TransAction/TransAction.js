import { useEffect, useState } from "react";
const TransAction = ({ transactions,deleteTransaction }) => {
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

  // const removeHandler = (id) => {
  //   const newTnx = transactions.filter((t) => t.id !== id);
  //   setFilterTnx(newTnx);
  // };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length) return <h3>Nothing here</h3>;

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
              className="flex flex-col items-center justify-between border-l-8 border-green-600 rounded-md shadow-lg bg-gray-100 p-2 my-2  font-semibold"
              style={{ borderLeft: t.type === "expense" && "8px solid red" }}
            >
              <span className="text-stone-500">{t.desc}</span>
              <span className="text-purple-900 font-bold">$ {t.amount}</span>
              <button onClick={() =>deleteTransaction(t.id)}>-</button>
            </div>
          ))
        : " No results"}
    </section>
    </>
  );
};

export default TransAction;
