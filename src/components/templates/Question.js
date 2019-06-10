import React, { PureComponent } from "react";
// import cookie from "js-cookie";
// import shortId from 'shortId';
import questions from "../../questions";
import history from "../../history";

import Container from "../elements/Container";
import ChoiceList from "../modules/ChoiceList";

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

  handleSelect = selectedOption => {
    if (questions[this.index + 1]) {
      history.push(`/question/${this.index + 1}`);
    } else {
      history.push(`/ready`);
    }
    // fetch(`http://localhost:4000/write/response/${selectedOption}`);
  };

  render() {
    const { label, id } = this.state;

    return (
      <Container>
        <h1>
          {id}. {label}
        </h1>
        <ChoiceList onChange={this.handleSelect} {...this.state} />
      </Container>
    );
  }
}

export default Question;
