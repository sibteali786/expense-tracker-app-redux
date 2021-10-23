import "./App.css";
import { TransactionListContainer } from "./containers/TransactionListContainer";
import { Header, Balance, IncomeExpenses } from "./components";
import { AddTransactionContainer } from "./containers/AddTransactionContainer";
function App() {
  return (
    <div className="max-w-full max-h-full h-full w-full bg-gray-100">
      <div className="flex justify-center items-center flex-col h-full w-full space-y-4">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionListContainer />
        <AddTransactionContainer />
      </div>
    </div>
  );
}

export default App;
