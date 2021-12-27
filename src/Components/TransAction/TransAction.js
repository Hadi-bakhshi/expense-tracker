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
    <section className="w-full">
      <input
        className="search bg-gray-100 m-1 p-2 rounded-md block"
        type="text"
        value={searchItem}
        onChange={handleChange}
        placeholder="Search"
      />
      {filterTnx.length
        ? filterTnx.map((t) => (
            <div
              key={t.id}
              className="flex justify-between border-l-8 border-green-600 rounded-md bg-gray-100 p-3 my-2 mx-2 font-semibold"
              style={{ borderLeft: t.type === "expense" && "8px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
              <button onClick={() =>deleteTransaction(t.id)}>Delete</button>
            </div>
          ))
        : " No results"}
    </section>
  );
};

export default TransAction;
