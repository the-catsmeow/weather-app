import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import API from './API';
import LocationMenu from './LocationMenu/LocationMenu';
import Main from './Main/Main';

import SideBar from './Sidebar/SideBar';
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

  useEffect(() => {
    API.fetchData(location).then((weatherResponse) => {
      setWeatherData({
        forecast: convertTemps(
          [...weatherResponse.consolidated_weather],
          convertToFahrenheit
        ),
        locationName: `${weatherResponse.title}, ${weatherResponse.parent.title}`,
        loaded: true,
        scale: 'fahrenheit',
      });
    });
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
            />
          )}
          <Main
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
