import React, { useState } from "react";
import { database } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Form.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="John Wick"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default Signup;
