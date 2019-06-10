import React, { PureComponent } from "react";
import Container from "../elements/Container";
import Button from "../elements/Button";

class Results extends PureComponent {
  constructor(props) {
    super(props);
    const result = localStorage.getItem("result") || "{}";
    const { raw, ...rest } = JSON.parse(result);
    this.state = {
      results: [
        { label: "Realistisch", value: rest.Realistisch || 0 },
        { label: "Intellectueel", value: rest.Intellectueel || 0 },
        { label: "Artistiek", value: rest.Artistiek || 0 },
        { label: "Sociaal", value: rest.Sociaal || 0 },
        { label: "Ondernemend", value: rest.Ondernemend || 0 },
        { label: "Conventioneel", value: rest.Conventioneel || 0 }
      ].sort((a, b) => {
        if (a.value > b.value) return -1;
        return 1;
      })
    };
  }

  render() {
    const { results } = this.state;

    return (
      <Container>
        <h1>Alles is gereed</h1>

        <ul>
          {results.map(({ label, value }) => (
            <li key={label}>
              {label}: {value}
            </li>
          ))}
        </ul>

        <Button showDelay={500} writeFile="8" to="/" primary>
          Klaar
        </Button>
      </Container>
    );
  }
}

export default Results;
