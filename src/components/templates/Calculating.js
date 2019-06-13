import React, { Fragment, PureComponent } from "react";

import Container from "../elements/Container";
import Button from "../elements/Button";

class Calculating extends PureComponent {
  state = {
    result: {}
  };

  duration = 7000;

  componentDidMount() {
    const answers = localStorage.getItem("answers");
    if (answers) {
      this.submit(JSON.parse(answers));
    } else {
      // for testing, if no data
      this.setResult({ id: "test" });
    }
    fetch(`http://localhost:4000/write/5`);
  }

  submit = async answers => {
    const response = await fetch("http://localhost:4000/write/responses", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(answers), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    });
    const result = await response.json();
    this.setResult(result);
    localStorage.removeItem("answers");
    localStorage.setItem('result', JSON.stringify(answers));
  };

  setResult = result => {
    setTimeout(() => this.setState({ result }), this.duration);
  };

  render() {
    const { result } = this.state;

    return (
      <Container>
        {!result.id ? (
          <Fragment>
            <h1>Jouw persoonlijke future green job wordt berekend</h1>
          </Fragment>
        ) : (
          <Fragment>
            <h1>Done!</h1>

            <Button autoGoAfterDelay showDelay={5} writeFile="6" to={`/result/${result.id}`} primary>
              Mijn future green job
            </Button>
          </Fragment>
        )}
      </Container>
    );
  }
}

export default Calculating;
