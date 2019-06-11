import React from "react";
import Container from '../elements/Container';
import Button from "../elements/Button";

const Home = () => (
  <Container>
    <h1>FUTURE GREEN JOBS?</h1>
    {/*<p className="lead">Druk op de knop om verder te gaan</p>*/}
    <p className="lead">
      <Button primary writeFile="2" to="/look-up">
        Start
      </Button>
    </p>
  </Container>
);

export default Home;
