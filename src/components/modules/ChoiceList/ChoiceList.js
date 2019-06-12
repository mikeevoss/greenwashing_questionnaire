import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "./ChoiceList.module.css";
import ChoiceListItem from "../../elements/ChoiceListItem/ChoiceListItem";

class ChoiceList extends PureComponent {
  transitionDuration = 1500;

  render() {
    const { options, onChange } = this.props;
    return (
      <TransitionGroup className={s.root} component="ul">
        {options.map((option, index) => {
          const label = typeof option === "object" ? option.label : option;

          return (
            <CSSTransition
              key={label}
              timeout={this.transitionDuration}
              classNames={{
                enter: s.itemEnter,
                enterActive: s.itemEnterActive,
                exit: s.itemExit,
                exitActive: s.itemExitActive
              }}
            >
              <ChoiceListItem
                key={label}
                style={{
                  transition: `${this.transitionDuration / 2}ms`,
                  transitionDelay: `${(index * 200) / 2}ms`,
                  top: 52 * index,
                }}
                onSelect={() => onChange(option, true)}
              >
                {label}
              </ChoiceListItem>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

export default ChoiceList;
