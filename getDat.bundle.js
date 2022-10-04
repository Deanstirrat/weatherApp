"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["getDat"],{

/***/ "./src/getWeatherData.js":
/*!*******************************!*\
  !*** ./src/getWeatherData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
async function getWeatherData(locationName) {
  const weatherKey = "7cb9b6da278de791a6c1c75c12413095";

  try {
    // use api to get lat/lon from location name
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${weatherKey}`;
    const locationNameJson = await fetch(url, { mode: "cors" });
    const locationNameData = await locationNameJson.json();
    if (locationNameData.length === 0) {
      // no location found
      alert(`city ${locationName} not found`);
      return 0;
    }
    // use lat/lon to get weather data from api
    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${locationNameData[0].lat}&lon=${locationNameData[0].lon}&units=imperial&appid=${weatherKey}`;
    const weatherJson = await fetch(url2, { mode: "cors" });
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getWeatherData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGF0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0csZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHdCQUF3QixPQUFPLHdCQUF3Qix3QkFBd0IsV0FBVztBQUNsSyw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRXZWF0aGVyRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbk5hbWUpIHtcbiAgY29uc3Qgd2VhdGhlcktleSA9IFwiN2NiOWI2ZGEyNzhkZTc5MWE2YzFjNzVjMTI0MTMwOTVcIjtcblxuICB0cnkge1xuICAgIC8vIHVzZSBhcGkgdG8gZ2V0IGxhdC9sb24gZnJvbSBsb2NhdGlvbiBuYW1lXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbk5hbWV9JmxpbWl0PTEmYXBwaWQ9JHt3ZWF0aGVyS2V5fWA7XG4gICAgY29uc3QgbG9jYXRpb25OYW1lSnNvbiA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBsb2NhdGlvbk5hbWVEYXRhID0gYXdhaXQgbG9jYXRpb25OYW1lSnNvbi5qc29uKCk7XG4gICAgaWYgKGxvY2F0aW9uTmFtZURhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBubyBsb2NhdGlvbiBmb3VuZFxuICAgICAgYWxlcnQoYGNpdHkgJHtsb2NhdGlvbk5hbWV9IG5vdCBmb3VuZGApO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIC8vIHVzZSBsYXQvbG9uIHRvIGdldCB3ZWF0aGVyIGRhdGEgZnJvbSBhcGlcbiAgICBjb25zdCB1cmwyID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xvY2F0aW9uTmFtZURhdGFbMF0ubGF0fSZsb249JHtsb2NhdGlvbk5hbWVEYXRhWzBdLmxvbn0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9JHt3ZWF0aGVyS2V5fWA7XG4gICAgY29uc3Qgd2VhdGhlckpzb24gPSBhd2FpdCBmZXRjaCh1cmwyLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckpzb24uanNvbigpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhT2JqID0gKFxuICAgICAgY3VycmVudFdlYXRoZXJTZWFyY2hUZXJtLFxuICAgICAgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvbixcbiAgICAgIGN1cnJlbnRUZW1wLFxuICAgICAgbWluVGVtcCxcbiAgICAgIG1heFRlbXAsXG4gICAgICB3aW5kU3BlZWQsXG4gICAgICBodW1pZGl0eSxcbiAgICAgIGNsb3VkQ292ZXJhZ2VcbiAgICApID0+ICh7XG4gICAgICBjdXJyZW50V2VhdGhlclNlYXJjaFRlcm0sXG4gICAgICBjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uLFxuICAgICAgY3VycmVudFRlbXAsXG4gICAgICBtaW5UZW1wLFxuICAgICAgbWF4VGVtcCxcbiAgICAgIHdpbmRTcGVlZCxcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgY2xvdWRDb3ZlcmFnZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YU9iaihcbiAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCksXG4gICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pLFxuICAgICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4KSxcbiAgICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEud2luZC5zcGVlZCksXG4gICAgICB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgd2VhdGhlckRhdGEuY2xvdWRzLmFsbFxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=