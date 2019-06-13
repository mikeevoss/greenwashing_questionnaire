import React from "react";
import Container from "../elements/Container";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const Explainer = () => (
  <Container>
    <h1>Meer info over de test</h1>
      <p>
          Deze test is gebaseerd op het RIASOC-model van Dr John Holland. RIASOC is een letterwoord van de eerste letter van de volgende zes persoonlijkheidskenmerken: Realistisch, Intellectueel, Artistiek, Sociaal, Ondernemend en Conventioneel. Volgens Holland kan je iedereen en ook ieder beroep indelen volgens het RIASOC-model.</p> <p> Ben je iemand die hoog scoort op kenmerk sociaal, zoek dan een beroep in bijvoorbeeld de zorg of het onderwijs.
      </p>

    <ButtonGroup>
      <Button to="/info" primary>
        Terug
      </Button>
    </ButtonGroup>
  </Container>
);

export default Explainer;
