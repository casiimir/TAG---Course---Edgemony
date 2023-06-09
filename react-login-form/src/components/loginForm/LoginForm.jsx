import { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [fullName, setFullName] = useState("");
  const [emailName, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSetFullName = (event) => setFullName(event.target.value);
  const onSetEmail = (event) => setEmail(event.target.value);
  const onSetPassword = (event) => setPassword(event.target.value);
  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fullName,
      email: emailName,
      password,
    });
  };

  return (
    <form onSubmit={onHandleSubmit} className="LoginForm">
      <h2>Get started</h2>
      <p>Create your account now</p>

      <label htmlFor="full-name">Full name</label>
      <input
        type="text"
        name="full-name"
        required
        value={fullName}
        onChange={onSetFullName}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        required
        value={emailName}
        onChange={onSetEmail}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        required
        value={password}
        onChange={onSetPassword}
      />
      <input type="submit" value="Sign Up" />

      <p>
        Have an account? <a href="#">Login</a>
      </p>
    </form>
  );
};

export default LoginForm;
