import React from "react";
import s from "./ChoiceList.module.css";

const ChoiceList = ({ options, onChange }) => (
  <ul className={s.root}>
    {options.map(option => {
      const label = typeof option === "object" ? option.label : option;
      return (
        <li key={label} className={s.item}>
          <button onClick={() => onChange(label)} className={s.button}>
            {label}
          </button>
        </li>
      );
    })}
  </ul>
);

export default ChoiceList;
