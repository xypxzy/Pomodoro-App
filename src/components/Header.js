import { RiSettings2Line } from "react-icons/ri";

import styles from "./Header.module.css";
import ModalSettings from "./Modal/ModalSettings";

const Header = ({ open = false, setOpen }) => {
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoIcon}>
          <img src="./favicon-32x32.png" alt="icon" />
          <h2>PomoTimer</h2>
        </div>
        {!open ? (
          <button className={styles.settingBtn} onClick={handleOpen}>
            <RiSettings2Line />
            Settings
          </button>
        ) : (
          <ModalSettings className={styles.modalOverlay} isOpen={setOpen} />
        )}
      </header>
      <hr />
    </>
  );
};

export default Header;
