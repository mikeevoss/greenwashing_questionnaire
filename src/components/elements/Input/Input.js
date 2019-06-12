import React, { PureComponent } from "react";
import s from "./Input.module.css";

class Input extends PureComponent {
  render() {
    return (
      <label className={s.root}>
        <span>Jouw e-mailadres</span>
        <input className={s.input} required type="email" />
      </label>
    );
  }
}

export default Input;