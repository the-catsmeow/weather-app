import React from 'react';
import styled from 'styled-components';
import {
  MainLayout,
  ScaleToggle,
  ForecastContainer,
  ForecastTile,
  HighlightsGrid,
  HighlightTile,
  WindIndicator,
  HumidityGraph,
} from './components';

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

const Main = ({ todayForecast, fiveDayForecast, changeTempScale, scale }) => {
  const clickHandler = (scale) => {
    changeTempScale(scale);
  };

  return (
    <MainLayout>
      <ScaleToggle clickHandler={clickHandler} scale={scale} />
      <ForecastContainer>
        {fiveDayForecast.map((forecast, i) => {
          return (
            <ForecastTile
              key={i}
              forecast={forecast}
              scale={scale}
              todaysDate={todayForecast.applicable_date}
            />
          );
        })}
      </ForecastContainer>
      <HighlightsHeader>Today's Highlights</HighlightsHeader>
      <HighlightsGrid>
        <HighlightTile
          highlightName="Wind Speed"
          suffix="mph"
          stat={todayForecast.wind_speed}
        >
          <WindIndicator
            direction={todayForecast.wind_direction}
            compass={todayForecast.wind_direction_compass}
          />
        </HighlightTile>
        <HighlightTile
          highlightName="Humidity"
          stat={todayForecast.humidity}
          suffix="%"
        >
          <HumidityGraph percentage={todayForecast.humidity} />
        </HighlightTile>
        <HighlightTile
          highlightName="Visibility"
          stat={todayForecast.visibility}
          suffix="miles"
        />
        <HighlightTile
          highlightName="Air Pressure"
          stat={todayForecast.air_pressure}
          suffix="mb"
        />
      </HighlightsGrid>
    </MainLayout>
  );
};

export default Main;
