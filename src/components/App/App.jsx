import { useState, useEffect } from "react";
import s from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const [value, setValue] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(value));
  }, [value]);

  const updateValue = (type) => {
    setValue({
      ...value,
      [type]: value[type] + 1,
    });
  };

  const resetValue = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = value.good + value.neutral + value.bad;

  return (
    <div className={s.wrapper}>
      <Description />
      <Options
        onUpdate={updateValue}
        onReset={resetValue}
        totalFeedback={totalFeedback}
      />
      <Feedback {...value} totalFeedback={totalFeedback} />
      <Notification totalFeedback={totalFeedback} />
    </div>
  );
};

export default App;
