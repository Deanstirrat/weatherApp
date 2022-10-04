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
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${weatherKey}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGF0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsbUVBQW1FLGFBQWEsaUJBQWlCLFdBQVc7QUFDNUcsZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHdCQUF3QixPQUFPLHdCQUF3Qix3QkFBd0IsV0FBVztBQUNsSyw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRXZWF0aGVyRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbk5hbWUpIHtcbiAgY29uc3Qgd2VhdGhlcktleSA9IFwiN2NiOWI2ZGEyNzhkZTc5MWE2YzFjNzVjMTI0MTMwOTVcIjtcblxuICB0cnkge1xuICAgIC8vIHVzZSBhcGkgdG8gZ2V0IGxhdC9sb24gZnJvbSBsb2NhdGlvbiBuYW1lXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25OYW1lfSZsaW1pdD0xJmFwcGlkPSR7d2VhdGhlcktleX1gO1xuICAgIGNvbnN0IGxvY2F0aW9uTmFtZUpzb24gPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3QgbG9jYXRpb25OYW1lRGF0YSA9IGF3YWl0IGxvY2F0aW9uTmFtZUpzb24uanNvbigpO1xuICAgIGlmIChsb2NhdGlvbk5hbWVEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gbm8gbG9jYXRpb24gZm91bmRcbiAgICAgIGFsZXJ0KGBjaXR5ICR7bG9jYXRpb25OYW1lfSBub3QgZm91bmRgKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICAvLyB1c2UgbGF0L2xvbiB0byBnZXQgd2VhdGhlciBkYXRhIGZyb20gYXBpXG4gICAgY29uc3QgdXJsMiA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsb2NhdGlvbk5hbWVEYXRhWzBdLmxhdH0mbG9uPSR7bG9jYXRpb25OYW1lRGF0YVswXS5sb259JnVuaXRzPWltcGVyaWFsJmFwcGlkPSR7d2VhdGhlcktleX1gO1xuICAgIGNvbnN0IHdlYXRoZXJKc29uID0gYXdhaXQgZmV0Y2godXJsMiwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJKc29uLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YU9iaiA9IChcbiAgICAgIGN1cnJlbnRXZWF0aGVyU2VhcmNoVGVybSxcbiAgICAgIGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb24sXG4gICAgICBjdXJyZW50VGVtcCxcbiAgICAgIG1pblRlbXAsXG4gICAgICBtYXhUZW1wLFxuICAgICAgd2luZFNwZWVkLFxuICAgICAgaHVtaWRpdHksXG4gICAgICBjbG91ZENvdmVyYWdlXG4gICAgKSA9PiAoe1xuICAgICAgY3VycmVudFdlYXRoZXJTZWFyY2hUZXJtLFxuICAgICAgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvbixcbiAgICAgIGN1cnJlbnRUZW1wLFxuICAgICAgbWluVGVtcCxcbiAgICAgIG1heFRlbXAsXG4gICAgICB3aW5kU3BlZWQsXG4gICAgICBodW1pZGl0eSxcbiAgICAgIGNsb3VkQ292ZXJhZ2UsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gd2VhdGhlckRhdGFPYmooXG4gICAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApLFxuICAgICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluKSxcbiAgICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCksXG4gICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLndpbmQuc3BlZWQpLFxuICAgICAgd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHdlYXRoZXJEYXRhLmNsb3Vkcy5hbGxcbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9