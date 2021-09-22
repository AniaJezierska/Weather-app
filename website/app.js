/* Global Variables */
const baseUrl =
  "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=1a42b91794f1fa1d0ca7ed9f00590103&units=metric";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Get Request
const getWeatherForecast = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// Post Request
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

// Update UI
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temperature;
    console.log(allData.temperature);
    document.getElementById("content").innerHTML = allData.feelings;
  } catch (error) {
    console.log("error", error);
  }
};

// Event listener function
document.getElementById("generate").addEventListener("click", getWeather);

function getWeather(e) {
  const zip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getWeatherForecast(`${baseUrl}${zip}${apiKey}`)
    .then(function (data) {
      postData("/add", {
        temperature: data.main.temp,
        date: newDate,
        feelings: feelings,
      });
    })
    .then(function () {
      updateUI();
    }, 1000);
}