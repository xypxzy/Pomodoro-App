import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import styles from "./ModalSettings.module.css";

const ModalSettings = ({ isOpen }) => {
  const [num, setNum] = useState("");

  const handleNumChange = (event) => {
    setNum(event.target.value);
  };

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <h3>Time(minutes)</h3>
      <div className={styles.modalContent}>
        <label>
          <p>Pomodoro</p>
          <input type="number" value={num} onChange={handleNumChange} />
        </label>
        <label>
          <p>Short Break</p>
          <input type="number" value={num} onChange={handleNumChange} />
        </label>
        <label>
          <p>Long Break</p>
          <input type="number" value={num} onChange={handleNumChange} />
        </label>
        <button onClick={handleClose}>Submit</button>
        <RiCloseLine onClick={handleClose} />
      </div>
    </div>
  );
};

export default ModalSettings;
