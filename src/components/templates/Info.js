import React from "react";
import Container from "../elements/Container";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const Info = () => (
  <Container>
    <h1>Nog wat laatste info</h1>
    <p>
      De test bestaat uit ongeveer 20 vragen die ons inzicht geven of jij
      geschikt bent als 'greenwasher'. Denk niet te lang na over de vragen, vul
      het eerste wat in je opkomt.
    </p>
    <p>Succes (en plezier)!</p>

    <ButtonGroup>
      <Button showDelay={3000} writeFile="4" to="/question/0" primary>
        Start de test
      </Button>
      <Button showDelay={3000} to="/explainer">
        Ik snap het
      </Button>
    </ButtonGroup>
  </Container>
);

export default Info;
