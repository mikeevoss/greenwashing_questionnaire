import React, { Fragment, PureComponent } from "react";

import Container from "../elements/Container";
import Button from "../elements/Button";

class Calculating extends PureComponent {
  state = {
    result: {}
  };

  duration = 3000;

  componentDidMount() {
    const answers = localStorage.getItem("answers");
    if (answers) {
      this.submit(JSON.parse(answers));
    } else {
      // for testing, if no data
      this.setResult({ id: "test" });
    }
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
            <h1>Je score wordt berekend</h1>
          </Fragment>
        ) : (
          <Fragment>
            <h1>Je score is berekend</h1>

            <Button writeFile="8" to={`/result/${result.id}`} primary>
              Bekijk jouw green job
            </Button>
          </Fragment>
        )}
      </Container>
    );
  }
}

export default Calculating;
