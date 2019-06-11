import React, { PureComponent } from "react";
import s from "./JobGenerator.module.css";

class JobGenerator extends PureComponent {
  jobs = ["Carwasher", "Labelwasher", "Energiewasher"];

  state = {
    job: 0,
    show: false
  };

  componentDidMount() {
    const { duration = 3000 } = this.props;
    this.interval = setInterval(this.change, 50);
    this.timeout = setTimeout(this.stop, duration);
    setTimeout(() => {
      this.$root.classList.add(s.active);
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  change = () => {
    this.setState(({ job }) => ({
      job: job < this.jobs.length - 1 ? job + 1 : 0
    }));
  };

  stop = () => {
    clearInterval(this.interval);
    this.setState({ show: true });
  };

  render() {
    const { job, show } = this.state;
    const { children, duration = 3000 } = this.props;
    return (
      <div
        ref={el => {
          this.$root = el;
        }}
        style={{ transitionDuration: `${duration}ms` }}
        className={s.root}
      >
        {show ? children : this.jobs[job]}
      </div>
    );
  }
}

export default JobGenerator;
