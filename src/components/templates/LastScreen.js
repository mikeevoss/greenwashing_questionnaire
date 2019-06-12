import React, { PureComponent } from "react";
import Container from "../elements/Container";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Input from "../elements/Input";

class LastScreen extends PureComponent {
  handleSubmit = e => {
    // e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <Container>
        <h1>Kijk omhoog</h1>
        <p>
          Vul je mail voor meer info over hoe je 'greenwashing' kunt herkennen.
        </p>
        <form onSubmit={this.handleSubmit}>
          <Input label="Jouw e-mailadres" />
          <ButtonGroup>
            <Button onClick={this.handleSubmit} showDelay={1000} writeFile="1" to="/" primary>
              Versturen
            </Button>
            <Button showDelay={1000} writeFile="1" to="/">
              Nee bedankt
            </Button>
          </ButtonGroup>
        </form>
      </Container>
    );
  }
}

export default LastScreen;
