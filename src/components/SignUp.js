import React, { useState } from "react";

const SignUp = ({ updated, setUpdated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);

  const submitSignup = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    let result = await fetch("https://registration-be-19120576.onrender.com");
    let accounts = await result.json();
    for (let index = 0; index < accounts.length; index++) {
      if (username === accounts[index].username) {
        setUsernameExist(true);
        return;
      }
    }
    setUsernameExist(false);
    if (username && password) {
      setValid(true);
      //let result =
      await fetch("https://registration-be-19120576.onrender.com", {
        method: "post",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      //result = await result.json();
      //console.log(result);
      setUpdated(false);
    }
  };

  return (
    <div className="register">
      <h1 className="signup-title">Register</h1>
      <form className="signup-form" onSubmit={submitSignup}>
        <input
          id="username"
          className="signup-input"
          type="text"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {submitted && !username ? (
          <span className="input-warn">Please enter a username</span>
        ) : null}
        {submitted && usernameExist ? (
          <span className="input-warn">
            Username already exists. Please try another one.
          </span>
        ) : null}
        <input
          id="password"
          className="signup-input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {submitted && !password ? (
          <span className="input-warn">Please enter a password</span>
        ) : null}
        {submitted && valid ? (
          <div className="success-message">Sign up success!</div>
        ) : null}
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
