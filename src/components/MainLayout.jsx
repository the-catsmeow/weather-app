import React from 'react';
import styled from 'styled-components';
import { parse, format, differenceInCalendarDays } from 'date-fns';
import { NearMe } from '@styled-icons/material-rounded';
import { getWeatherImg } from '../utility/util';

const entities = require('entities');

const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 72%;
  background-color: #100e1d;
  min-height: 100vh;
  align-items: flex-start;
  padding: 20px 5% 20px 5%;
  padding-bottom: 3em;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 1500px) {
    font-size: 1.5em;
  }
`;

const ScaleFlex = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  align-self: flex-end;
  align-items: center;
`;

const ScaleButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway"
  font-size: 18px;
  margin: 0 6px;
  height: 40px;
  width: 40px;
  background: ${(props) => (props.active ? '#E7E7EB' : '#585676')};
  border-radius: 50%;
  border: none;
  outline: none;
  color: ${(props) => (props.active ? '#110E3C' : '#E7E7EB')};
`;

const ForecastFlex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 3em;
  font-size: 1.2em;
`;

const ForecastTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 16em;
  flex-grow: 1;
  max-width: 8em;
  padding: 1.2em;
  background: #1e213a;
  color: #e7e7eb;
  font-size: 1em;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 1em;
`;

const TemperatureFlex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway';
  font-size: 1em;
  font-weight: 500;
`;

const HighlightsHeader = styled.h2`
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 60px;
  margin-bottom: 2em;
  color: #e7e7eb;
`;

const HighlightsGrid = styled.div`
  width: 100%;
  height: 40vw;
  display: grid;
  grid-gap: 3em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 3fr;
  grid-template-areas:
    'wind humidity'
    'visibility air-pressure';

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'wind'
      'humidity'
      'visibility'
      'air-pressure';
    height: auto;
  }
`;

const HighlightsTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.5em;
  color: #e7e7eb;
  background: #1e213a;
`;

const HighlightName = styled.span`
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 500;
`;

const HighlightStat = styled.div`
  font-family: Raleway;
  font-size: 4em;
  font-weight: 700;
  & .highlight-name {
    font-size: 0.5em;
  }
`;

const WindDirectionFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Raleway';
  font-size: 14px;
  font-weight: 500;

  & span {
    margin-left: 8px;
  }
`;

const WindDirectionIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.3);
  transform: rotate(${(props) => props.direction}deg);

  & > svg {
    height: 20px;
    width: 20px;
    color: #e7e7eb;
  }
`;

const HumidityBarContainer = styled.div`
  display: grid;
  width: 100%;
`;

const HumidityBarScale = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  color: #a09fb1;
  font-family: 'Raleway';
  font-size: 12px;
  font-weight: 700;
`;

const HumidityBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #e7e7eb;
  border-radius: 80px;

  &::before {
    height: 8px;
    content: '';
    position: absolute;
    width: ${(props) => props.percentage}%;
    border-radius: 80px;
    background: #ffec65;
    top: 0;
    left: 0;
  }
`;

const MainLayout = ({
  todayForecast,
  fiveDayForecast,
  changeTempScale,
  scale,
}) => {
  const clickHandler = (scale) => {
    changeTempScale(scale);
  };

  return (
    <Main>
      <ScaleFlex>
        <ScaleButton
          active={scale === 'celcius'}
          onClick={() => clickHandler('celcius')}
        >
          {entities.decodeHTML5('&degC')}
        </ScaleButton>
        <ScaleButton
          active={scale === 'fahrenheit'}
          onClick={() => clickHandler('fahrenheit')}
        >
          {entities.decodeHTML5('&degF')}
        </ScaleButton>
      </ScaleFlex>
      <ForecastFlex>
        {fiveDayForecast.map((forecast, i) => {
          return (
            <ForecastTile key={i}>
              <span>
                {Math.abs(
                  differenceInCalendarDays(
                    parse(
                      todayForecast.applicable_date,
                      'yyyy-MM-dd',
                      new Date()
                    ),
                    parse(forecast.applicable_date, 'yyyy-MM-dd', new Date())
                  )
                ) === 1
                  ? 'Tomorrow'
                  : format(
                      parse(forecast.applicable_date, 'yyyy-MM-dd', new Date()),
                      'EEE d MMM'
                    )}
              </span>
              <ImageContainer>
                <img
                  src={getWeatherImg(forecast.weather_state_abbr)}
                  alt={forecast.weather_state_abbr}
                  style={{ width: '100%', height: '100%' }}
                />
              </ImageContainer>
              <TemperatureFlex>
                <span>
                  {Math.round(forecast.max_temp)}
                  {scale === 'fahrenheit'
                    ? entities.decodeHTML5('&degF')
                    : entities.decodeHTML5('&degC')}
                </span>
                <span style={{ color: '#A09FB1' }}>
                  {Math.round(forecast.min_temp)}
                  {scale === 'fahrenheit'
                    ? entities.decodeHTML5('&degF')
                    : entities.decodeHTML5('&degC')}
                </span>
              </TemperatureFlex>
            </ForecastTile>
          );
        })}
      </ForecastFlex>
      <HighlightsHeader>Today's Highlights</HighlightsHeader>
      <HighlightsGrid>
        <HighlightsTile>
          <HighlightName>Wind Speed</HighlightName>
          <HighlightStat>
            {Math.round(todayForecast.wind_speed)}
            <span className="highlight-name"> mph</span>
          </HighlightStat>
          <WindDirectionFlex>
            <WindDirectionIndicator direction={todayForecast.wind_direction}>
              <NearMe />
            </WindDirectionIndicator>
            <span>{todayForecast.wind_direction_compass}</span>
          </WindDirectionFlex>
        </HighlightsTile>
        <HighlightsTile>
          <HighlightName>Humidity</HighlightName>
          <HighlightStat>{todayForecast.humidity}%</HighlightStat>
          <HumidityBarContainer>
            <HumidityBarScale>
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </HumidityBarScale>
            <HumidityBar percentage={todayForecast.humidity} />
          </HumidityBarContainer>
        </HighlightsTile>
        <HighlightsTile>
          <HighlightName>Visibility</HighlightName>
          <HighlightStat>
            {Math.round(todayForecast.visibility)}
            <span className="highlight-name"> miles</span>
          </HighlightStat>
        </HighlightsTile>
        <HighlightsTile>
          <HighlightName>Air Pressure</HighlightName>
          <HighlightStat>
            {todayForecast.air_pressure}
            <span className="highlight-name"> mb</span>
          </HighlightStat>
        </HighlightsTile>
      </HighlightsGrid>
    </Main>
  );
};

export default MainLayout;
