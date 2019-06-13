import React, { PureComponent } from "react";
import Container from "../elements/Container";
import Button from "../elements/Button";
import JobGenerator from "../views/JobGenerator/JobGenerator"

const scores = {
  Realistisch: { label: "Carwasher", value: 6 },
  Intellectueel: { label: "Carwasher", value: 6 },
  Artistiek: { label: "Labelwasher", value: 7 },
  Sociaal: { label: "Labelwasher", value: 7 },
  Ondernemend: { label: "Energiewasher", value: 8 },
  Conventioneel: { label: "Energiewasher", value: 8 }
};

// Carwasher (intelectueel, realistisch), Labelwasher (artistiek, sociaal), Energiewasher (ondernemend, convectioneel)

class Results extends PureComponent {
  constructor(props) {
    super(props);
    const result = localStorage.getItem("result") || "{}";
    const { raw, ...rest } = JSON.parse(result);
    const results = [
      { label: "Realistisch", value: rest.Realistisch || 0 },
      { label: "Intellectueel", value: rest.Intellectueel || 0 },
      { label: "Artistiek", value: rest.Artistiek || 0 },
      { label: "Sociaal", value: rest.Sociaal || 0 },
      { label: "Ondernemend", value: rest.Ondernemend || 0 },
      { label: "Conventioneel", value: rest.Conventioneel || 0 }
    ].sort((a, b) => {
      if (a.value > b.value) return -1;
      return 1;
    });

    this.state = {
      results,
      job: scores[results[0].label]
    };
  }

  componentDidMount() {
    const { job } = this.state;
    fetch(`http://localhost:4000/write/6`);
    for (let i = 6; i < job.value; i += 1) {
      setTimeout(() => {
        fetch(`http://localhost:4000/write/${i + 1}`);
      }, 120 * (i - 5));
    }
  }

  componentWillUnmount() {
    const { job } = this.state;
    for (let i = job.value; i < 9; i += 1) {
      setTimeout(() => {
        fetch(`http://localhost:4000/write/${i + 1}`);
      }, 120 * (i - job.value));
    }
  }

  render() {
    const { job, results } = this.state;

    return (
      <Container fullWidth>
        <h1>Jouw persoonlijke future green job is</h1>

        <JobGenerator duration={3000}>{job.label}</JobGenerator>

          {/*<p>Je scoorde het hoogste op: {results[0].label}</p>*/}

        <Button autoGoAfterDelay showDelay={80000} to="/final" primary>
          Volgende
        </Button>
      </Container>
    );
  }
}

export default Results;
