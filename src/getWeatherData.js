export default async function getWeatherData(locationName) {
  const weatherKey = "7cb9b6da278de791a6c1c75c12413095";

  // use lat/lon to get weather data from api
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=imperial&appid=${weatherKey}`;
  try {
    const weatherJson = await fetch(url, { mode: "cors" });
    if (!weatherJson.ok) throw new Error(`City ${locationName} not found`);
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
    alert(error);
    return null;
  }
}
