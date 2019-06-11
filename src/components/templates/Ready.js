import React from "react";
import Container from "../elements/Container";
import Button from "../elements/Button";

const Ready = () => (
  <Container>
    <h1>Alles is gereed</h1>

    <Button showDelay={500} writeFile="8" to="/last-screen" primary>
      Klaar
    </Button>
  </Container>
);

export default Ready;
