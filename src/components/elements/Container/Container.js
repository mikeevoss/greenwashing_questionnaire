import React from "react";
import cN from "classnames";
import s from "./Container.module.css";

const Container = ({ children, fullWidth }) => (
  <div className={cN(s.root, { [s.fullWidth]: fullWidth })}>{children}</div>
);

export default Container;
