import { useEffect } from "react";
import { fetchCurrencies } from "./../../services/apiCurrencies.js";

const Currencies = () => {
  useEffect(() => {
    fetchCurrencies
      .then((data) => {
        console.log(data.rates);
      })
      .catch(console.log);
  }, []);
  return <div></div>;
};

export default Currencies;
