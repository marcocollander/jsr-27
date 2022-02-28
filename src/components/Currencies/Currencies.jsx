import { useEffect, useState } from "react";
// import { fetchCurrencies } from "./../../services/apiCurrencies.js";

const Currencies = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    // fetchCurrencies
    fetch("https://api.frankfurter.app/latest")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.rates);
        setRates(data.rates);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h1>Currencies</h1>
      <ul>
        {Object.entries(rates).map(([key, value]) => (
          <li>
            ({key}) {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Currencies;
