import React, { PureComponent } from "react";
import Container from "../elements/Container";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Input from "../elements/Input";

class LastScreen extends PureComponent {
  state = { email: "" };

  handleSubmit = async () => {
    await fetch("http://localhost:4000/email", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(this.state), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    });
  };

  render() {
    const { email } = this.state;

    return (
      <Container>
        <h1>Kijk naar de muur</h1>
        <p>Vul je mail in en ontvang de 'greenwash-scanner' in PDF.</p>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={val => this.setState({ email: val })}
            value={email}
            label="Jouw e-mailadres"
          />
          <ButtonGroup>
            <Button
              onClick={this.handleSubmit}
              showDelay={20000}
              writeFile="1"
              to="/"
              primary
            >
              Versturen
            </Button>
            <Button showDelay={20000} writeFile="1" to="/">
              Nee bedankt
            </Button>
          </ButtonGroup>
        </form>
      </Container>
    );
  }
}

export default LastScreen;
