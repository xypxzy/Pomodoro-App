import styles from "./ModalSettings.module.css";

const ModalSettings = () => {
  return (
    <div className={styles.modalWindow}>
      <h3>Time(minutes)</h3>
      <div className={styles.timeBlock}>
        <span>
          <p>Pomodoro</p>
          <p>28</p>
        </span>
        <span>
          <p>Short Break</p>
          <p>5</p>
        </span>
        <span>
          <p>Long Break</p>
          <p>10</p>
        </span>
      </div>
    </div>
  );
};

export default ModalSettings;
