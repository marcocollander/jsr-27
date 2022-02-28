import React, { Component } from "react";

const not = (bool) => !bool;

class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      showCounter: true,
      items: [],
    };
  }

  increment = () => {
    if (this.state.count > 3) {
      return;
    }
    this.setState((state) => ({ ...state, count: state.count + 1 }));
  };

  toggleShowCounter = () =>
    this.setState((state) => ({
      ...state,
      showCounter: not(state.showCounter),
    }));

  render() {
    return (
      <div>
        <h1>CounterClass</h1>
        {this.state.showCounter && (
          <button onClick={this.increment}>count ({this.state.count})</button>
        )}
        <button onClick={this.toggleShowCounter}>Toggle counter</button>
      </div>
    );
  }
}

export default CounterClass;
