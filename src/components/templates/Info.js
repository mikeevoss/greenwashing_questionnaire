import React from "react";
import Container from "../elements/Container";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const Info = () => (
  <Container>
    <h1>Nog wat laatste info</h1>
    <p>
      De test bestaat uit ongeveer 15 vragen die inzicht geven in jouw kwaliteiten. Op basis hiervan kunnen we jou een 'future green job' aanbevelen. Denk niet te lang na over de vragen, vul
      het eerste wat in je opkomt.
    </p>

    <ButtonGroup>
    <Button writeFile="4" to="/question/0" primary>
        Start de test
    </Button>
    <Button to="/explainer">
        Meer info
    </Button>
    </ButtonGroup>
  </Container>
);

export default Info;
