"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["displayDat"],{

/***/ "./src/displayWeatherData.js":
/*!***********************************!*\
  !*** ./src/displayWeatherData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWeatherData)
/* harmony export */ });
async function displayWeatherData(weatherData) {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displayWeatherData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheURhdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWlFLFNBQVMsS0FBSyxZQUFZOztBQUUzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsV0FBVztBQUM1Qyx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9kaXNwbGF5V2VhdGhlckRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGdpcGh5S2V5ID0gXCJzTVJvSGFvUEpvSTZSajU0MmZUdENxeWg2MWlSUmhTVVwiO1xuICBjb25zdCBzZWFyY2hUZXJtID0gd2VhdGhlckRhdGEuY3VycmVudFdlYXRoZXJTZWFyY2hUZXJtO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb247XG4gIGNvbnN0IHRlbXAgPSB3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcDtcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9JHtnaXBoeUtleX0mcz0ke2Rlc2NyaXB0aW9ufWA7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY2NlbnRDb2xvclN1bm55XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG4gIHRlbXBDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGVtcH1GYDtcbiAgY29uc3QgaWNvbkRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbkRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uRGVzY3JpcHRpb25Db250YWluZXJcIik7XG4gIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICB3ZWF0aGVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2VhdGhlckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgaWNvbkRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZSk7XG4gIGljb25EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uRGVzY3JpcHRpb25Db250YWluZXIpO1xuXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coYHNlYXJjaGluZyBmb3IgJHtzZWFyY2hUZXJtfWApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB3ZWF0aGVySW1hZ2Uuc3JjID0gcmVzcG9uc2VEYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9