import React from "react";
import "./App.css";

import Header from "./component/Header";
import Front from "./component/Front";

function App() {
  return (
    <>
      <div className="bg-slate-950">
        <Header />
        <Front />
      </div>
    </>
  );
}

export default App;
