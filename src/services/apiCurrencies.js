const url = "https://api.frankfurter.app/latest";
const fetchCurrencies = fetch(url).then((resp) => resp.json());

export { fetchCurrencies };
