import React from "react";
import Container from "../elements/Container";
import Button from "../elements/Button";

const LastScreen = () => (
  <Container>
    <h1>Laatste scherm</h1>
    <p>
      Hoeruh
    </p>
    <p>Succes (en plezier)!</p>

    <Button to="/" writeFile="1">reset</Button>
  </Container>
);

export default LastScreen;
