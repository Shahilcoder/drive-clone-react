import React from "react";
import "./App.css";
import MyDrive from "./Content/MyDrive";

import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Sidebar />
        <div className="content">
          <MyDrive />
        </div>
      </div>
    </div>
  );
}

export default App;
