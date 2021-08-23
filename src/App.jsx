import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { testWeather } from './test_data/weather';
import LocationMenu from './components/LocationMenu';
import MainLayout from './components/MainLayout';

import SideBar from './components/SideBar';
import {
  convertTemps,
  convertToCelcius,
  convertToFahrenheit,
} from './utility/util';

const AppDiv = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

function App() {
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [location, setLocation] = useState({
    latitude: 40.71455,
    longitude: -74.007118,
  });

  const BASE_URL =
    'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/';

  useEffect(() => {
    async function fetchData() {
      const locationRequest = await fetch(
        BASE_URL +
          'location/search/?lattlong=' +
          location.latitude +
          ',' +
          location.longitude
      );
      const locationResponse = await locationRequest.json();
      const weatherRequest = await fetch(
        BASE_URL + 'api/location/' + locationResponse[0].woeid
      );
      const weatherResponse = await weatherRequest.json();

      setWeatherData({
        forecast: [...weatherResponse.consolidated_weather],
        locationName: `${weatherResponse.title}, ${weatherResponse.parent.title}`,
        loaded: true,
        scale: 'celcius',
      });
    }

    fetchData();
  }, [location]);

  const setCurrentScale = (scale) => {
    if (scale === 'celcius') {
      setWeatherData({
        ...weatherData,
        forecast: convertTemps(weatherData.forecast, convertToCelcius),
        scale: 'celcius',
      });
    } else {
      setWeatherData({
        ...weatherData,
        forecast: convertTemps(weatherData.forecast, convertToFahrenheit),
        scale: 'fahrenheit',
      });
    }
  };

  const getCurrentLocation = () => {
    var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var { latitude, longitude } = pos.coords;

      setLocation({ latitude, longitude });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <AppDiv>
      {weatherData.loaded ? (
        <React.Fragment>
          {!showLocationMenu ? (
            <SideBar
              forecast={weatherData.forecast[0]}
              currentLocation={weatherData.locationName}
              openLocationHandler={() => setShowLocationMenu(true)}
              currentScale={weatherData.scale}
              getLocation={getCurrentLocation}
            />
          ) : (
            <LocationMenu
              closeHandler={() => setShowLocationMenu(false)}
              setLocation={setLocation}
              BASE_URL={BASE_URL}
            />
          )}
          <MainLayout
            todayForecast={Object.assign(weatherData.forecast[0])}
            fiveDayForecast={weatherData.forecast.slice(1)}
            changeTempScale={setCurrentScale}
            scale={weatherData.scale}
          />
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </AppDiv>
  );
}

export default App;
