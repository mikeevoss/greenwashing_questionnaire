import React, { PureComponent } from "react";
import s from "./Input.module.css";

class Input extends PureComponent {
  render() {
    const { value, onChange } = this.props;

    return (
      <label className={s.root}>
        <span>Jouw e-mailadres</span>
        <input
          className={s.input}
          onChange={({ target }) => onChange(target.value)}
          value={value}
          required
          type="email"
        />
      </label>
    );
  }
}

export default Input;
