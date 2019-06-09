import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import cN from "classnames";
import s from "./Button.module.css";

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
    this.setState({ hidden: false });
  };

  handleClick = () => {
    const { writeFile } = this.props;
    if (writeFile) {
      fetch(`http://localhost:4000/write/${writeFile}`);
    }
  };

  render() {
    const { to, children, primary, showDelay, writeFile, ...rest } = this.props;
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
