import "./App.css";
import { TransactionListContainer } from "./containers/TransactionListContainer";
import { Header, Balance, IncomeExpenses, AddTransaction } from "./components";
function App() {
  return (
    <div className="max-w-full max-h-full h-full w-full bg-gray-100">
      <div className="flex justify-center items-center flex-col h-full w-full space-y-4">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionListContainer />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
