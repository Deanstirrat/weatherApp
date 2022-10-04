import Chart from "chart.js/auto";

export default function displayAdditionalWeatherData(weatherData) {
  const cloudCoveragePercentage = weatherData.cloudCoverage;

  const container2 = document.createElement("div");
  container2.classList.add("accentColorSunny");
  container2.classList.add("container2");

  const minTemp = document.createElement("p");
  minTemp.innerText = `Low: ${weatherData.minTemp}F`;
  const maxTemp = document.createElement("p");
  maxTemp.innerText = `High: ${weatherData.maxTemp}F`;
  const humidity = document.createElement("p");
  humidity.innerHTML = `Humidity: ${weatherData.humidity}%`;
  const windSpeed = document.createElement("p");
  windSpeed.innerText = `Wind Speed: ${weatherData.windSpeed}mph`;
  const cloudCoverage = document.createElement("canvas");
  cloudCoverage.id = "cloudChart";
  const cloudChart = new Chart(cloudCoverage, {
    type: "pie",
    data: {
      labels: ["Cloudy", "Clear"],
      datasets: [
        {
          label: "Cloud Coverage",
          data: [cloudCoveragePercentage, 100 - cloudCoveragePercentage],
          backgroundColor: ["rgb(161, 161, 161)", "rgb(25, 130, 196)"],
          hoverOffset: 4,
        },
      ],
    },
  });

  container2.appendChild(minTemp);
  container2.appendChild(maxTemp);
  container2.appendChild(humidity);
  container2.appendChild(windSpeed);
  container2.appendChild(cloudCoverage);

  return container2;
}
