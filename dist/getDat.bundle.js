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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getWeatherData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGF0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsYUFBYSxpQkFBaUIsV0FBVztBQUNqRyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCx3QkFBd0IsT0FBTyx3QkFBd0Isd0JBQXdCLFdBQVc7QUFDdkosUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0V2VhdGhlckRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb25OYW1lKSB7XG4gIGNvbnN0IHdlYXRoZXJLZXkgPSBcIjdjYjliNmRhMjc4ZGU3OTFhNmMxYzc1YzEyNDEzMDk1XCI7XG5cbiAgdHJ5IHtcbiAgICAvLyB1c2UgYXBpIHRvIGdldCBsYXQvbG9uIGZyb20gbG9jYXRpb24gbmFtZVxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZUpzb24gPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25OYW1lfSZsaW1pdD0xJmFwcGlkPSR7d2VhdGhlcktleX1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBsb2NhdGlvbk5hbWVEYXRhID0gYXdhaXQgbG9jYXRpb25OYW1lSnNvbi5qc29uKCk7XG4gICAgaWYgKGxvY2F0aW9uTmFtZURhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBubyBsb2NhdGlvbiBmb3VuZFxuICAgICAgYWxlcnQoYGNpdHkgJHtsb2NhdGlvbk5hbWV9IG5vdCBmb3VuZGApO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIC8vIHVzZSBsYXQvbG9uIHRvIGdldCB3ZWF0aGVyIGRhdGEgZnJvbSBhcGlcbiAgICBjb25zdCB3ZWF0aGVySnNvbiA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xvY2F0aW9uTmFtZURhdGFbMF0ubGF0fSZsb249JHtsb2NhdGlvbk5hbWVEYXRhWzBdLmxvbn0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9JHt3ZWF0aGVyS2V5fWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckpzb24uanNvbigpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhT2JqID0gKFxuICAgICAgY3VycmVudFdlYXRoZXJTZWFyY2hUZXJtLFxuICAgICAgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvbixcbiAgICAgIGN1cnJlbnRUZW1wLFxuICAgICAgbWluVGVtcCxcbiAgICAgIG1heFRlbXAsXG4gICAgICB3aW5kU3BlZWQsXG4gICAgICBodW1pZGl0eSxcbiAgICAgIGNsb3VkQ292ZXJhZ2VcbiAgICApID0+ICh7XG4gICAgICBjdXJyZW50V2VhdGhlclNlYXJjaFRlcm0sXG4gICAgICBjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uLFxuICAgICAgY3VycmVudFRlbXAsXG4gICAgICBtaW5UZW1wLFxuICAgICAgbWF4VGVtcCxcbiAgICAgIHdpbmRTcGVlZCxcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgY2xvdWRDb3ZlcmFnZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YU9iaihcbiAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCksXG4gICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pLFxuICAgICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4KSxcbiAgICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEud2luZC5zcGVlZCksXG4gICAgICB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgd2VhdGhlckRhdGEuY2xvdWRzLmFsbFxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=