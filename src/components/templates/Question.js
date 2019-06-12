import React, { PureComponent } from "react";
// import cookie from "js-cookie";
// import shortId from 'shortId';
import questions from "../../questions";
import history from "../../history";

import Container from "../elements/Container";
import ChoiceList from "../modules/ChoiceList";
import Dilemma from "../modules/Dilemma";
import ProgressBar from "../modules/ProgressBar";

class Question extends PureComponent {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { index }
      }
    } = this.props;

    this.state = questions[index];
    this.index = Number(index);
  }

  componentWillReceiveProps(newProps) {
    const {
      match: {
        params: { index }
      }
    } = this.props;
    const {
      match: {
        params: { index: newIndex }
      }
    } = newProps;
    if (index !== newIndex) {
      this.setState({ ...questions[newIndex] });
      this.index = Number(newIndex);
    }
  }

  handleSelect = async (answer, shouldContinue) => {
    const answers = JSON.parse(localStorage.getItem("answers")) || { raw: [] };
    answers[answer.category] = (answers[answer.category] || 0) + answer.value;
    answers.raw = [
      ...answers.raw,
      { time: new Date().toISOString(), ...answer }
    ];
    localStorage.setItem("answers", JSON.stringify(answers));

    if (!shouldContinue) return;
    if (questions[this.index + 1]) {
      history.push(`/question/${this.index + 1}`);
    } else {
      history.push(`/calculating`);
    }
  };

  render() {
    const { label, image, id, type } = this.state;
    let question = <ChoiceList key={id} onChange={this.handleSelect} {...this.state} />;
    if (type === "dilemma") {
      question = <Dilemma key={id} onChange={this.handleSelect} {...this.state} />;
    }

    return (
      <Container>
        <h1>
          {id}. {label}
        </h1>
        {image && <img src={image} alt="" />}
        {question}
        <ProgressBar size={((this.index + 1) * 100) / questions.length} />
      </Container>
    );
  }
}

export default Question;
