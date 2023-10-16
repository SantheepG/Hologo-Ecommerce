import React from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import "./Main.css";
export const Main = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Sidebar />
      </div>
    </React.Fragment>
  );
};
