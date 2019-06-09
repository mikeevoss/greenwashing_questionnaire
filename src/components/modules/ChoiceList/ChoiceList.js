import React from "react";
import s from "./ChoiceList.module.css";

const ChoiceList = ({ options, onChange }) => (
  <ul className={s.root}>
    {options.map(option => (
      <li key={option} className={s.item}>
        <button onClick={() => onChange(option)} className={s.button}>{option}</button>
      </li>
    ))}
  </ul>
);

export default ChoiceList;
