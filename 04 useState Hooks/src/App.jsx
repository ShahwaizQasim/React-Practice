import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  // useState

  // let userName = "Shahwaiz Qasim";

  // userName Update
  let [userName, setUserName] = useState("Shahwaiz");
  const updateUserName = () => {
    setUserName("Shahwaiz Aur Code");
  };

  const HandleOnInputValues = (e) => setUserName(e.target.value);

  // console.log("userName from state=>", userName);

  // tasbeeh counter
  let [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const subtractCounter = () => {
    setCounter(counter - 1);
  };

  // checkbox ky zarya boolean ki form me user se data liya hai
  let [isRemember, setIsRemember] = useState(true);

  const handleOnCheckBox = (e) => {
    setIsRemember(e.target.checked);
  };

  // console.log("setIsRemember=>", isRemember);

  // finanace management app

  const [Amount, setAmount] = useState(0);
  const [Type, setType] = useState("Income");
  const [Transaction, setTransaction] = useState([]);

  const handleOnButton = () => {
    console.log("Amount=>", Amount);
    console.log("Type=>", Type);
    setTransaction([...Transaction, { Amount, Type }]);
    setAmount("");
    setType("Income");
  };
  console.log("Transaction", Transaction);

  // const totalIncome = Transaction.reduce(
  //   (acc, transaction) =>
  //     transaction.type === "Income" ? acc + Number(transaction.amount) : acc,
  //   0
  // );
  // console.log("totalIncome", totalIncome);

  // const totalExpense = Transaction.reduce(
  //   (acc, transaction) =>
  //     transaction.type === "Expense" ? acc + Number(transaction.amount) : acc,
  //   0
  // );
  // console.log("totalExpense", totalExpense);

  // const totalBalance = totalIncome - totalExpense; 
  

  return (
    <>
      <h1>{userName}</h1>
      <button onClick={updateUserName}>Update UserName</button>

      <br />
      <h1 className="counter">Counter</h1>
      <h1 className="counter1">{counter}</h1>
      <button onClick={addCounter}>Add</button>
      <button onClick={subtractCounter}>Subtract</button>

      <br />
      <br />

      <form>
        <input
          type="text"
          value={userName}
          placeholder="Enter Your Name"
          className="myInput"
          onChange={HandleOnInputValues}
        />
        <br />
        <input
          type="checkbox"
          value={isRemember}
          placeholder="Enter Your Name"
          className="myInput"
          onChange={handleOnCheckBox}
        />
      </form>
      <br />

      <h1>Finanace Managment App</h1>
      <input
        type="number"
        value={Amount}
        placeholder="Enter Amount"
        className="myInput"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <select
        value={Type}
        onChange={(e) => setType(e.target.value)}
        className="myInput"
      >
        <option value="Income">Income</option>
        <option value="Expensive">Expensive</option>
      </select>
      <br />
      <div>
        {Transaction.map((data, index) => {
          return (
            <div className="userData">
              <h3 className="data">
                {index + 1} {")"} {data.Amount}
              </h3>
              <h3 className="data">{data.Type}</h3>
            </div>
          );
        })}
      </div>

      <button onClick={handleOnButton}>Submit</button>

      <div className="parent">
        <div className="child">
          <h3>Total Income</h3>
          <h3>10000</h3>
        </div>
        <div className="child">
          <h3>Total Expense</h3>
          <h3>10000</h3>
        </div>
        <div className="child">
          <h3>Total Balance</h3>
          <h3>10000</h3>
        </div>
      </div>
    </>
  );
}

export default App;
