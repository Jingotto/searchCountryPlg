import countryFeedItems from "./searchCountrieTemplates/country-template.hbs";
import fullCountryFeedItems from "./searchCountrieTemplates/few-country-template.hbs";

const countryContainer = document.querySelector(".country-container");

export default function createMarkup(countries) {
  countryContainer.innerHTML = "";

  if (countries.length > 10) {
    const message = "введите более специфичное название";
    countryContainer.insertAdjacentHTML("beforeend", message);

    return;
  }

  if (countries.length === 1) {
    const markup = countries
      .map((countries) => fullCountryFeedItems(countries))
      .join("");
    countryContainer.insertAdjacentHTML("beforeend", markup);

    return;
  }

  const markup = countries
    .map((countries) => countryFeedItems(countries))
    .join("");
  countryContainer.insertAdjacentHTML("beforeend", markup);
}
