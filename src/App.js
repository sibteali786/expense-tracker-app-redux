import "./App.css";
import { Header, Balance, IncomeExpenses, AddTransaction } from "./components";
function App() {
  return (
    <div className="max-w-full h-screen w-screen">
      <div className="flex justify-center items-center flex-col h-full w-full space-y-4">
        <Header />
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
