import "./App.css";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [currform, setCurrform] = useState("login");

  const toggleForm = (formName) => {
    setCurrform(formName);
  };
  return (
    <div className="App">
      {currform === "login" ? (
        <Login onFormchange={toggleForm} />
      ) : (
        <Signup onFormchange={toggleForm} />
      )}
    </div>
  );
}

export default App;
