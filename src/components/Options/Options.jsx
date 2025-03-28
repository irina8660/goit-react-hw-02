import s from "./Options.module.css";
import clsx from "clsx";

import { PiSmileyMeh } from "react-icons/pi";
import { PiSmiley } from "react-icons/pi";
import { PiSmileyXEyes } from "react-icons/pi";
import { RxUpdate } from "react-icons/rx";

const Options = ({ onUpdate, onReset, totalFeedback }) => {
  return (
    <ul className={s.options__button_wrapper}>
      <li>
        <button
          onClick={() => {
            onUpdate("good");
          }}
          className={clsx(s.options__button, s.options__button_good)}
        >
          <PiSmiley />
        </button>
      </li>
      <li>
        <button
          onClick={() => onUpdate("neutral")}
          className={clsx(s.options__button, s.options__button_neutral)}
        >
          <PiSmileyMeh />
        </button>
      </li>
      <li>
        <button
          onClick={() => onUpdate("bad")}
          className={clsx(s.options__button, s.options__button_bad)}
        >
          <PiSmileyXEyes />
        </button>
      </li>
      <li>
        <button
          onClick={onReset}
          className={clsx(s.options__button, s.options__button_reset)}
        >
          <RxUpdate />
        </button>
      </li>
    </ul>
  );
};
export default Options;
