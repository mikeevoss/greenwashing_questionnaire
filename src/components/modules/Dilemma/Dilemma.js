import React, { Component } from "react";
import cN from "classnames";
import s from "./Dilemma.module.css";

class Dilemma extends Component {
  state = {
    results: []
  };

  handleChange = async (option, index) => {
    await this.setState(({ results: oldResults }) => {
      const results = [...oldResults];
      results[index] = option;
      return { results };
    });

    const { results } = this.state;
    const { options, onChange } = this.props;
    if (
      results.length === options.length &&
      results.findIndex(r => typeof r === "undefined") === -1
    ) {
      // save all answers
      results.map((r, i) => onChange(r, i === options.length - 1));
    }
  };

  render() {
    const { options } = this.props;
    const { results } = this.state;

    return (
      <ul className={cN(s.root)}>
        {options &&
          options.map((option, index) => {
            return (
              <li key={index} className={s.option}>
                <ul className={cN(s.list)}>
                  {!options.items &&
                    option.items.map(option => {
                      const active =
                        results[index] && results[index].label === option.label;
                      return (
                        <button
                          key={option.label}
                          onClick={() => this.handleChange(option, index)}
                          className={cN(s.button, { [s.active]: active })}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Dilemma;
