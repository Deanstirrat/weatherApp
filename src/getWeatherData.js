export default async function getWeatherData(locationName) {
  const weatherKey = "7cb9b6da278de791a6c1c75c12413095";

  try {
    // use api to get lat/lon from location name
    const locationNameJson = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${weatherKey}`,
      { mode: "cors" }
    );
    const locationNameData = await locationNameJson.json();
    if (locationNameData.length === 0) {
      // no location found
      alert(`city ${locationName} not found`);
      return 0;
    }
    // use lat/lon to get weather data from api
    const weatherJson = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationNameData[0].lat}&lon=${locationNameData[0].lon}&units=imperial&appid=${weatherKey}`,
      { mode: "cors" }
    );
    const weatherData = await weatherJson.json();
    const weatherDataObj = (
      currentWeatherSearchTerm,
      currentWeatherDescription,
      currentTemp,
      minTemp,
      maxTemp,
      windSpeed,
      humidity,
      cloudCoverage
    ) => ({
      currentWeatherSearchTerm,
      currentWeatherDescription,
      currentTemp,
      minTemp,
      maxTemp,
      windSpeed,
      humidity,
      cloudCoverage,
    });

    return weatherDataObj(
      weatherData.weather[0].main,
      weatherData.weather[0].description,
      Math.round(weatherData.main.temp),
      Math.round(weatherData.main.temp_min),
      Math.round(weatherData.main.temp_max),
      Math.round(weatherData.wind.speed),
      weatherData.main.humidity,
      weatherData.clouds.all
    );
  } catch (error) {
    console.log(error);
  }
}
