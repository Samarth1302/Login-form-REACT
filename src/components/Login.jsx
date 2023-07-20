import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="form-cont">
      <h2>Login</h2>
      <form className="loginform" onSubmit={handleSubmit}>
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
          Log In
        </button>
      </form>
      <button className="btn" onClick={() => props.onFormchange("signup")}>
        Not a user? Sign-up
      </button>
    </div>
  );
}

export default Login;
