import React, { useState } from "react";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="form-cont">
      <h2>Signup</h2>
      <form className="signupform" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="type name here"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="type email here"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="***********"
          id="password"
          name="password"
        />
        <button className="sub-btn" type="submit">
          Sign Up
        </button>
      </form>
      <button className="btn" onClick={() => props.onFormchange("login")}>
        Already have an account? Login
      </button>
    </div>
  );
}
export default Signup;
