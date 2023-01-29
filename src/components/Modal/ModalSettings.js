import { RiCloseLine } from "react-icons/ri";

import styles from "./ModalSettings.module.css";

const ModalSettings = ({ isOpen, setModalTimes, modalTimes }) => {
  const handleNumChange = (event, index) => {
    const newInputs = [...modalTimes];
    if (event.target.value >= 0) {
      newInputs[index].value = event.target.value;
      setModalTimes(newInputs);
    }
  };

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalHeader}>
        <h5>Setting</h5>
        <RiCloseLine className={styles.closeSetting} onClick={handleClose} />
      </div>
      <hr />

      <p className={styles.text}>Time(minutes)</p>
      <div className={styles.modalContent}>
        {modalTimes.map((input, index) => (
          <input
            key={index}
            type="number"
            value={input.value}
            onChange={(e) => handleNumChange(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalSettings;
