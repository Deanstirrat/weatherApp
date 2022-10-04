export default async function displayWeatherData(weatherData) {
  const giphyKey = "sMRoHaoPJoI6Rj542fTtCqyh61iRRhSU";
  const searchTerm = weatherData.currentWeatherSearchTerm;
  const description = weatherData.currentWeatherDescription;
  const temp = weatherData.currentTemp;

  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${description}`;

  const container = document.createElement("div");
  container.classList.add("accentColorSunny");
  container.classList.add("container");
  const tempContainer = document.createElement("div");
  tempContainer.classList.add("temp");
  tempContainer.innerText = `${temp}F`;
  const iconDescriptionContainer = document.createElement("div");
  iconDescriptionContainer.classList.add("iconDescriptionContainer");
  const weatherImage = new Image();
  weatherImage.classList.add("image");
  const weatherDescription = document.createElement("p");
  weatherDescription.classList.add("description");
  weatherDescription.textContent = description;

  iconDescriptionContainer.appendChild(weatherImage);
  iconDescriptionContainer.appendChild(weatherDescription);
  container.appendChild(tempContainer);
  container.appendChild(iconDescriptionContainer);

  try {
    console.log(`searching for ${searchTerm}`);
    const response = await fetch(url, { mode: "cors" });
    const responseData = await response.json();
    weatherImage.src = responseData.data.images.original.url;
    return container;
  } catch (error) {
    console.log(error);
  }
}
