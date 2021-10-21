import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  AddTransaction,
  TransactionList,
} from "./components";
function App() {
  return (
    <div className="max-w-full max-h-full h-full w-full bg-gray-100">
      <div className="flex justify-center items-center flex-col h-full w-full space-y-4">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
