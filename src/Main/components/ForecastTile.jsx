import styled from 'styled-components';
import TemperatureRange from './TemperatureRange';
import { parse, format, differenceInCalendarDays } from 'date-fns';
import { getWeatherImg } from '../../utility/util';

const ForecastFlex = styled.div`
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

const ForecastTile = ({ forecast, todaysDate, scale }) => {
  return (
    <ForecastFlex>
      <span>
        {Math.abs(
          differenceInCalendarDays(
            parse(todaysDate, 'yyyy-MM-dd', new Date()),
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
      <TemperatureRange
        maxTemp={forecast.max_temp}
        minTemp={forecast.min_temp}
        scale={scale}
      />
    </ForecastFlex>
  );
};

export default ForecastTile;
