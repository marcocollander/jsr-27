import React, { useState, useEffect } from "react";

const ChuckFn = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then((resp) => resp.json())
      .then(({ value }) => {
        setJoke((state) => value);
      })
      .catch((err) => console.error(err));
  }, []);

  const chuckJoke = <blockquote>{joke ?? "Loading..."}</blockquote>;

  return (
    <div>
      <p>Chuck's joke</p>
      {chuckJoke}
    </div>
  );
};

export default ChuckFn;
