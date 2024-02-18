import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async () => {
    console.log("Clicked")
    const res = axios.post("http://localhost:4000/register", {
      name,
      email,
      password,
    });

    const userData = await axios.get("http://localhost:4000/sendUsers");
    console.log("@@@@",userData);
  };

  return (
    <div className="App">
      <div className="App-header">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => {storeData()}}>Submit</button>
      </div>
    </div>
  );
}

export default App;
