import { useState } from "react";
import "./App.css";
import Logout from "./components/logout";
import Login from "./components/login";

function App() {
  // conditional rendering
  const [isLogedIn, setIsLoggedIn] = useState(true);

  const userName = "Syed Shahwaiz";
  const urlImage =
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
  const studentsName = [
    { id: 1, name: "Shahwaiz" },
    { id: 2, name: "Hassan" },
    { id: 3, name: "Ali" },
  ];

  // conditional rendering 

  if (!isLogedIn) {
    return <Login/>
  }

  return (
    <div>
      <h2>Hello {userName}</h2>
      <img src={urlImage} alt="bird" height={100} width={100} class="photo" />
      <ul>
        {studentsName.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>

      {/* conditional rendering */}
      {/* {isLogedIn? <Logout /> : <Login />} */}
      {isLogedIn && <Logout />}
    </div>
  );
}

export default App;
