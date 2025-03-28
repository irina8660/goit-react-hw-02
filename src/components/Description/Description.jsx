import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.description__wrapper}>
      <h1 className={s.description__header}>Sip Happens Café</h1>
      <p className={s.description__text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
export default Description;
