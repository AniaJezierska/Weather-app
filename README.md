# Weather Journal App

A simple application that is an exercise on web APIs, fetch API and `async` functions, build with `Node.js`, `html`, `css` and `javascript`.  
The application will try to fetch the weather data from [Open Weather Map](https://openweathermap.org/),  
and show the temperature with the current date, when the user press the Generate button.

# How to run

## Dependency installation

```
npm install
```

```
npm install body-parser cors express
```

## Running the server

Run in the project directory

```
npm start
```

## Go to the application

Go to the browser and open
[http://localhost:8000](http://localhost:8000)

Submitting the form will send a request to the OpenWeatherMap API and return the weather information for that location.

## OpenWeatherMap API

The project requires acquire api credentials from OpenWeatherMap website. Use your credentials and the base url to create global variavles at the top of your app.js code.
