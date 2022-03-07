import React, { Component } from "react";

class Chuck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: null,
    };
  }

  componentDidMount() {
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then((resp) => resp.json())
      .then(({ value }) => {
        this.setState((state) => ({ ...state, joke: value }));
      })
      .catch((err) => console.error(err));
  }

  render() {
    const chuckJoke = this.state.joke ? (
      <blockquote>{this.state.joke}</blockquote>
    ) : (
      <blockquote>Loading...</blockquote>
    );

    return (
      <div>
        <p>Chuck's joke</p>
        {chuckJoke}
      </div>
    );
  }
}

export default Chuck;
