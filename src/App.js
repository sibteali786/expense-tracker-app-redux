import "./App.css";
import { TransactionListContainer } from "./containers/TransactionListContainer";
import { Header, IncomeExpenses } from "./components";
import { AddTransactionContainer } from "./containers/AddTransactionContainer";
import { BalanceContainer } from "./containers/BalanceContainer";
function App() {
  return (
    <div className="max-w-full max-h-full h-full w-full bg-gray-100">
      <div className="flex justify-center items-center flex-col h-full w-full space-y-4">
        <Header />
        <BalanceContainer />
        <IncomeExpenses />
        <TransactionListContainer />
        <AddTransactionContainer />
      </div>
    </div>
  );
}

export default App;
