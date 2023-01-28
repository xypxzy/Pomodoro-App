import React, { useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";

import "./App.css";

function App() {
  const addModal = document.querySelector(".App");
  const [open, setOpen] = useState(false);

  open
    ? addModal.classList.add("openModal")
    : addModal?.classList.remove("openModal");

  return (
    <div className="App">
      <div className="container">
        <Header open={open} setOpen={setOpen} />
        <Content />
      </div>
    </div>
  );
}

export default App;
