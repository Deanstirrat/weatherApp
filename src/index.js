import getWeatherData from "./getWeatherData";
import "./style.css";
import Icon from "./loupe.png";
import displayWeatherData from "./displayWeatherData";
import displayAdditionalWeatherData from "./displayAdditionalWeatherData";

let weatherData = {};
// populate with random city
const defaultCities = [
  "London",
  "Los Angeles",
  "New York City",
  "San Francisco",
  "Ho Chi Minh City",
];
const initialCity = defaultCities[Math.floor(Math.random() * 5)];

async function updateWeatherData(data) {
  const weatherDataDisplay = await displayWeatherData(data);
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.appendChild(weatherDataDisplay);
  const additionalWeatherDataDisplay = displayAdditionalWeatherData(data);
  main.appendChild(additionalWeatherDataDisplay);

  if (data.cloudCoverage >= 50) {
    const accentElements = document.querySelectorAll(".accentColorSunny");
    const mainElements = document.querySelectorAll(".mainColorSunny");
    accentElements.forEach((el) => {
      el.classList.remove("accentColorSunny");
      el.classList.add("accentColorCloudy");
    });
    mainElements.forEach((el) => {
      el.classList.remove("mainColorSunny");
      el.classList.add("mainColorCloudy");
    });
  } else {
    const accentElements = document.querySelectorAll(".accentColorCloudy");
    const mainElements = document.querySelectorAll(".mainColorCloudy");

    accentElements.forEach((el) => {
      el.classList.remove("accentColorCloudy");
      el.classList.add("accentColorSunny");
    });
    mainElements.forEach((el) => {
      el.classList.remove("mainColorCloudy");
      el.classList.add("mainColorSunny");
    });
  }
}

async function buildWeatherData() {
  const locationName = searchInput.value;
  weatherData = await getWeatherData(locationName);
  if (weatherData === 0) {
    // no location found
    console.log("not found");
  } else {
    updateWeatherData(weatherData);
    console.log(
      `${weatherData.currentWeatherDescription}\n${weatherData.currentTemp}\n${weatherData.currentWeatherSearchTerm}`
    );
  }
}

const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

// header
const header = document.createElement("div");
header.classList.add("header");
header.classList.add("accentColorSunny");
// header contents
const searchContainer = document.createElement("div");
searchContainer.classList.add("searchContainer");
const searchInput = document.createElement("input");
searchInput.classList.add("searchInput");
searchInput.type = "text";
searchInput.value = initialCity;
const searchButton = document.createElement("button");
const searchButtonImage = new Image();
searchButtonImage.src = Icon;
searchButtonImage.classList.add("searchButtonImage");
searchButton.appendChild(searchButtonImage);
searchButton.classList.add("searchButton");
searchButton.addEventListener("click", async () => {
  const locationName = searchInput.value;
  buildWeatherData();
});
// append content to header
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchButton);
header.appendChild(searchContainer);

// main
const main = document.createElement("div");
main.id = "main";
main.classList.add("main");
main.classList.add("mainColorSunny");
// main Content

// append to content
content.appendChild(header);
content.appendChild(main);
document.body.appendChild(content);

buildWeatherData();
