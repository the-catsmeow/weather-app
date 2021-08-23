import React from 'react';
import styled from 'styled-components';
import { format, parse } from 'date-fns';
import { MyLocation } from '@styled-icons/material-outlined';
import { Place } from '@styled-icons/material';

import { cloudBackground } from '../assets/assets';
import { getWeatherImg } from '../utility/util';

const entities = require('entities');

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  max-width: 459px;
  min-width: 300px;
  background-color: #1e213a;
  min-height: 100vh;
  padding: 2rem 0;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
  }
`;

const SearchRow = styled.div`
  display: flex;
  margin: 0 2.2rem 0 2.2rem;
  justify-content: space-between;
`;

const SearchButton = styled.button`
  cursor: pointer;
  width: 161px;
  height: 2.5em;
  background-color: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  color: #fff;
  font-weight: 500;
  font-family: 'Raleway';
  font-size: 16px;

  &:active {
    transform: scale(1.05);
  }
`;

const LocatorButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;

  &:active {
    transform: scale(1.05);
  }
`;

const Locater = (props) => (
  <LocatorButton {...props}>
    <MyLocation />
  </LocatorButton>
);

const CurrentWeatherImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 40px;
  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;
  & img {
    width: 100%;
    max-height: 234px;
    height: 100%;
    max-width: 234px;
    z-index: 1;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  background: url(${cloudBackground});
  background-size: 130%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.1;
  z-index: 0;
`;

const TemperatureFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Raleway;
  color: #e7e7eb;

  & span:first-child {
    font-weight: 500;
    font-size: 144px;
  }

  & span:last-child {
    font-weight: 300;
    font-size: 48px;
    color: #e7e7eb;
  }
`;

const CurrentWeatherFlex = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 3rem;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #a09fb1;
`;

const TodayDateFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: #88869d;
`;

const CurrentLocationFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  color: #88869d;

  & svg {
    height: 18px;
    margin-right: 0.5em;
  }
`;

const SideBar = ({
  currentLocation,
  forecast,
  openLocationHandler,
  currentScale,
  getLocation,
}) => {
  return (
    <Section>
      <SearchRow>
        <SearchButton onClick={openLocationHandler}>
          Search for Places
        </SearchButton>
        <Locater
          onClick={() => {
            console.log('her');
            getLocation();
          }}
        />
      </SearchRow>
      <CurrentWeatherImage>
        <BackgroundOverlay />
        <img
          src={getWeatherImg(forecast.weather_state_abbr)}
          alt="current weather"
        />
      </CurrentWeatherImage>
      <TemperatureFlex>
        <span>{forecast.the_temp.toFixed(0)}</span>
        <span>
          {entities.decodeHTML5('&deg')}
          {currentScale === 'celcius' ? 'C' : 'F'}
        </span>
      </TemperatureFlex>
      <CurrentWeatherFlex>{forecast.weather_state_name}</CurrentWeatherFlex>
      <TodayDateFlex>
        <span>Today</span>
        <span style={{ margin: '0 0.75em ' }}>•</span>
        <span>
          {format(
            parse(forecast.applicable_date, 'yyyy-MM-dd', new Date()),
            'EEE d MMM'
          )}
        </span>
      </TodayDateFlex>
      <CurrentLocationFlex>
        <Place />
        <span>{currentLocation}</span>
      </CurrentLocationFlex>
    </Section>
  );
};

export default SideBar;
