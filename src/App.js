import React from "react";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="sidebar">
      <div className="left-col"><i className="arrow left"></i></div>
      <div className="right-col"><Form /></div>
    </div>
  )
}

export default App;

