import React from "react";
import s from "./ProgressBar.module.css";

const ProgressBar = ({ size }) => (
  <div className={s.root}>
    <div className={s.inner} style={{ width: `${size}%` }} />
  </div>
);

export default ProgressBar;
