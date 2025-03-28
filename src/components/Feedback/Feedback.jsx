import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    totalFeedback !== 0 && (
      <ul className={s.feedback__wrapper}>
        <li className={s.feedback__item}>Good: {good}</li>
        <li className={s.feedback__item}>Neutral: {neutral}</li>
        <li className={s.feedback__item}>Bad: {bad}</li>
        <li className={s.feedback__item}>Total: {totalFeedback}</li>
        <li className={s.feedback__item}>
          Positive: {Math.round((good / totalFeedback) * 100)}%
        </li>
      </ul>
    )
  );
};
export default Feedback;
