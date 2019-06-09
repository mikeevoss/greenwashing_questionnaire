import React from "react";
import Container from "../elements/Container";
import Button from "../elements/Button";

const LookUp = () => (
  <Container>
    <h1>Kijk omhoog</h1>

    <Button showDelay={15000} writeFile="3" to="/info" primary>
      Verder
    </Button>
  </Container>
);

export default LookUp;
