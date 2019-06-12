import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import cN from "classnames";
import s from "./Button.module.css";
import history from "../../../history";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    const { showDelay } = props;
    this.state = { hidden: false };
    if (showDelay) {
      this.showTimeout = setTimeout(this.show, showDelay);
      this.state = {
        hidden: true
      };
    }
  }

  componentWillUnmount() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
  }

  show = () => {
    const { autoGoAfterDelay, to } = this.props;
    this.setState({ hidden: false });
    if (autoGoAfterDelay) history.push(to);
  };

  handleClick = () => {
    const { writeFile } = this.props;
    if (writeFile) {
      fetch(`http://localhost:4000/write/${writeFile}`);
    }
  };

  render() {
    const {
      to,
      children,
      primary,
      showDelay,
      writeFile,
      autoGoAfterDelay,
      ...rest
    } = this.props;
    const { hidden } = this.state;
    return (
      <Link
        className={cN(s.root, { [s.primary]: primary }, { [s.hidden]: hidden })}
        to={to}
        onClick={this.handleClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }
}

export default Button;
