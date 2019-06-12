import React, { PureComponent } from "react";
import s from "./ChoiceListItem.module.css";

class ChoiceListItem extends PureComponent {
  componentDidMount() {
  }

  render() {
    const { onSelect, style, children } = this.props;

    return (
      <li
        style={style}
        className={s.root}
      >
        <button onClick={onSelect} className={s.button}>
          {children}
        </button>
      </li>
    );
  }
}

export default ChoiceListItem;
