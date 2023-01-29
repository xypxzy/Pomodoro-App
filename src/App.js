import React, { useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";

import "./App.css";

function App() {
  const addModal = document.querySelector(".App");
  const [open, setOpen] = useState(false);
  const [modalTimes, setModalTimes] = useState([
    { value: "30", label: "Pomodoro" },
    { value: "5", label: "Short Break" },
    { value: "10", label: "Long Break" },
  ]);

  open
    ? addModal.classList.add("openModal")
    : addModal?.classList.remove("openModal");

  return (
    <div className="App">
      <div className="container">
        <Header
          open={open}
          setOpen={setOpen}
          modalTimes={modalTimes}
          setModalTimes={setModalTimes}
        />
        <Content modalTimes={modalTimes} setModalTimes={setModalTimes} />
      </div>
    </div>
  );
}

export default App;
