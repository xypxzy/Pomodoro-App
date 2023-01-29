import { useState, useEffect } from "react";
import styles from "./Content.module.css";

const tabs = [
  {
    id: 1,
    label: "Pomodoro",
  },
  {
    id: 2,
    label: "Short Break",
  },
  {
    id: 3,
    label: "Long Break",
  },
];

const Content = ({ modalTimes }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [time, setTime] = useState(600);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!isPaused) {
      const id = setInterval(() => {
        setTime((time) => {
          if (time <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
    return clearInterval(intervalId);
  }, [isPaused]);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      setIntervalId(
        setInterval(() => {
          setTime((time) => {
            if (time <= 0) {
              clearInterval(intervalId);
              return 0;
            }
            return time - 1;
          });
        }, 1000)
      );
    } else {
      clearInterval(intervalId);
    }
  };

  const convertingTime = {
    minutes: 0,
    seconds: time,
  };

  const convertTime = () => {
    while (convertingTime.seconds >= 60) {
      convertingTime.minutes += Math.floor(convertingTime.seconds / 60);
      convertingTime.seconds -= convertingTime.minutes * 60;
    }
    return convertingTime;
  };
  convertTime(time);

  return (
    <div className={styles.contentBlock}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={
              activeTab === index ? styles.tabsItemActive : styles.tabsItem
            }
            onClick={() => {
              setActiveTab(index);
              setTime(+modalTimes[index].value * 60); //Тут нужно дать время по умолчанию
              setIsPaused(true);
              !isPaused &&
                alert("You really want to change. Your time will be reset");
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>
        {convertingTime.minutes
          ? convertingTime.minutes < 10
            ? `0${convertingTime.minutes}`
            : convertingTime.minutes
          : `00`}
        :
        {convertingTime.seconds < 10
          ? `0${convertingTime.seconds}`
          : convertingTime.seconds}
      </div>
      <button onClick={handlePauseClick} className={styles.tabsBtnPause}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default Content;
