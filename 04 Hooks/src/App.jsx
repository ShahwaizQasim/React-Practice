import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  // useState

  // let userName = "Shahwaiz Qasim";

  let [userName, setUserName] = useState("Shahwaiz");
  const updateUserName = () => {
    setUserName("Shahwaiz Aur Code");
  };

  const HandleOnInputValues = (e) => (setUserName(e.target.value));

  console.log("userName from state=>", userName);

  let [counter, setCounter] = useState(0);
  const Counter = () => {
    setCounter(counter + 1);
  };

  let [isRemember, setIsRemember] = useState(true)
  
  const handleOnCheckBox = (e) => {
    setIsRemember(e.target.checked)
  };

  console.log("setIsRemember=>", isRemember);

  
  


  return (
    <>
      <h1>{userName}</h1>
      <button onClick={updateUserName}>Update UserName</button>

      <br />
      <h1 className="counter">{counter}</h1>
      <button onClick={Counter}>Click Counter</button>

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
    </>
  );
}

export default App;
