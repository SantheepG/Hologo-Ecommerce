/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Form.css";
import Login from "./login";
import Signup from "./signup";
import { useState } from "react";
const Form = () => {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [signupClicked, setSignupClicked] = useState(false);
  const [loginClicked, setloginClicked] = useState(false);

  const handleLoginClick = () => {
    setDisplayLogin(true);
    setloginClicked(true);
    setSignupClicked(false);
  };

  const handleSignupClick = () => {
    setDisplayLogin(false);
    setloginClicked(false);
    setSignupClicked(true);
  };

  return (
    <>
      <div className="circle"></div>
      <div className="card">
        <div className="options">
          <span>
            <a
              className={signupClicked ? "signup active" : "signup"}
              onClick={handleSignupClick}
            >
              Signup
            </a>
            <a
              className={loginClicked ? "login active" : "login"}
              onClick={handleLoginClick}
            >
              Login
            </a>
          </span>
        </div>

        {displayLogin ? <Login /> : <Signup />}
        <footer>Santheep's craft</footer>
      </div>
    </>
  );
};

export default Form;
