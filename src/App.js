import "./App.css";
import ExpenseApp from "./Components/ExpenseApp/ExpenseApp";
import NavBar from "./Components/NavBar/NavBar";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div>
      <ToastProvider>
        <NavBar />
        <ExpenseApp />
      </ToastProvider>
    </div>
  );
}

export default App;
