import {
  clear,
  hail,
  heavyCloud,
  heavyRain,
  lightCloud,
  lightRain,
  showers,
  sleet,
  snow,
  thunderstorm,
} from '../assets/assets';

export function convertToFahrenheit(tempCelcius) {
  return (tempCelcius * 9) / 5 + 32;
}

export function convertToCelcius(tempFahrenheit) {
  return ((tempFahrenheit - 32) * 5) / 9;
}

export function convertTemps(forecastArr, convert) {
  return forecastArr.map((forecast) => {
    return {
      ...forecast,
      min_temp: convert(forecast.min_temp),
      max_temp: convert(forecast.max_temp),
      the_temp: convert(forecast.the_temp),
    };
  });
}

export function getWeatherImg(weatherStateAbbreviation) {
  switch (weatherStateAbbreviation) {
    case 'sn':
      return snow;
    case 'sl':
      return sleet;
    case 'h':
      return hail;
    case 't':
      return thunderstorm;
    case 'hr':
      return heavyRain;
    case 'lr':
      return lightRain;
    case 's':
      return showers;
    case 'hc':
      return heavyCloud;
    case 'lc':
      return lightCloud;
    default:
      return clear;
  }
}
