import React, { useState } from "react";
import { database } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <form className="form-container" onSubmit={handleLogin}>
      <h2>Log in</h2>
      <input
        type="email"
        placeholder="example@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">LOG IN</button>
    </form>
  );
};

export default Login;
