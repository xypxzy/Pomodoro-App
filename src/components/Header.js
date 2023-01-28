import React, { useState } from "react";
import Modal from "react-modal";
import { RiSettings2Line, RiCloseLine } from "react-icons/ri";

import styles from "./Header.module.css";
import ModalSettings from "./Modal/ModalSettings";

const modalWindowStyles = {
  content: {
    width: "400px",
    minHeight: "500px",

    padding: "20px 30px",
    borderRadius: "10px",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",

    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    color: "#000",
  },
};

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  function openModalHandler() {
    setOpenModal(true);
    console.log(23);
  }
  function closeModalHandler() {
    setOpenModal(false);
    console.log(3);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoIcon}>
          <img src="./favicon-32x32.png" alt="icon" />
          <h2>PomoTimer</h2>
        </div>
        <>
          <div className={styles.settingBtn} onClick={openModalHandler}>
            <RiSettings2Line />
            <p>Settings</p>
          </div>
          <Modal
            isOpen={openModal}
            style={modalWindowStyles}
            onRequestClose={() => setOpenModal(false)}
            ariaHideApp={false}
          >
            <div onClick={closeModalHandler}>
              <span className={styles.modalWindow}>
                <p>Setting</p>
                <RiCloseLine />
              </span>
              <hr />
              <ModalSettings />
            </div>
          </Modal>
        </>
      </header>
      <hr />
    </>
  );
};

export default Header;
