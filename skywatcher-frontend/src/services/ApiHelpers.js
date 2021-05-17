import useFetch from "./UseFetch";

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API;
const cityName = "New York";
const exclusions = "current,minutely,hourly,daily";
const exclusions_daily = "current,minutely,hourly,alerts";
const exclusions_hourly = "current,minutely,daily,alerts";

// API for fetching current weather
export const useFetchCurrentWeather = (city = cityName) =>
  useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

export const useFetchWeatherForecast = (city = cityName) =>
  useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
  );

export const useFetchAirPollution = (lat, lon) =>
  useFetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );

export const useFetchWeatherAlerts = (lat, lon) =>
  useFetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclusions}&appid=${apiKey}`
  );

export const useFetchWeatherData = (lat, lon, unit) =>
  useFetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclusions}&units=${unit}&appid=${apiKey}`
  );

export const useFetchWeatherDaily = (lat, lon, unit) =>
  useFetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclusions_daily}&units=${unit}&appid=${apiKey}`
  );

export const useFetchWeatherHourly = (lat, lon, unit) =>
  useFetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclusions_hourly}&units=${unit}&appid=${apiKey}`
  );

export const useFetchWeatherMap = (layer, zoom, x_tile, y_tile) =>
  useFetch(
    `https://tile.openweathermap.org/map/${layer}/${zoom}/${x_tile}/${y_tile}.png?appid=${apiKey}`
  );

export const useFetchHistoricalWeather = (lat, lon, dateTime, unit) =>
  useFetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dateTime}&unit=${unit}&appid=${apiKey}`
  );
