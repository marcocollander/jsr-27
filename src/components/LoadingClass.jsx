import React, { Component } from "react";

class LoadingClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    setTimeout(() => {
      this.setState((state) => ({ ...state, isLoading: false }));
    }, 2 * 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.isLoading ? "Loading" : "Witaj"}</h1>
      </div>
    );
  }
}

export default LoadingClass;
