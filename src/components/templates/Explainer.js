import React from "react";
import Container from "../elements/Container";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const Explainer = () => (
  <Container>
    <h1>Explainer</h1>
    <p>
      Lorem ipsum
    </p>

    <ButtonGroup>
      <Button to="/info" primary>
        Terug
      </Button>
    </ButtonGroup>
  </Container>
);

export default Explainer;
