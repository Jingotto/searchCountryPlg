import createMarkup from './createCountrieMarkup.js'


export default function fetchCountries(searchQuery) {
  return fetch(searchQuery)
    .then((resp) => resp.json())
    .then((data) => {
      createMarkup(data);
    });
}


