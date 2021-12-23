import "./App.css";
import ExpenseApp from "./Components/ExpenseApp/ExpenseApp";

function App() {
  return (
    <div className="App h-screen bg-slate-200 text-zinc-700 flex flex-col items-center w-screen pt-8 px-2">
      <header>
        <h2>Expense Tracker</h2>
      </header>
      <ExpenseApp/>
    </div>
  );
}

export default App;
