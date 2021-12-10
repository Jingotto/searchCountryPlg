import fetchCountries from "./fetchCountries";
import debounce from 'lodash.debounce'

const searchInput = document.querySelector("#search-form");
const baseUrl = "https://restcountries.com/v3.1/name/";

searchInput.addEventListener("input", debounce(searchFormInputHandler, 500));

function searchFormInputHandler(e) {
  const inputValue = e.target.value;
  fetchCountries(baseUrl + inputValue );
}