import React from "react";
import Container from "../elements/Container";
import Button from "../elements/Button";

const LookUp = () => (
  <Container>
    <h1>Kijk naar de muur</h1>

    <Button autoGoAfterDelay showDelay={40000} writeFile="3" to="/info" primary>
      Let's go!
    </Button>
  </Container>
);

export default LookUp;
