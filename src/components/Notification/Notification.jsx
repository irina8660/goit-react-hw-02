import s from "./Notification.module.css";
const Notification = ({ totalFeedback }) => {
  return (
    totalFeedback === 0 && <p className={s.notification}>No feedback yet</p>
  );
};
export default Notification;
