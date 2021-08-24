import styled from 'styled-components';
const entities = require('entities');

const TemperatureFlex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway';
  font-size: 1em;
  font-weight: 500;
`;

const TemperatureRange = ({ minTemp, maxTemp, scale }) => {
  return (
    <TemperatureFlex>
      <span>
        {Math.round(maxTemp)}
        {scale === 'fahrenheit'
          ? entities.decodeHTML5('&degF')
          : entities.decodeHTML5('&degC')}
      </span>
      <span style={{ color: '#A09FB1' }}>
        {Math.round(minTemp)}
        {scale === 'fahrenheit'
          ? entities.decodeHTML5('&degF')
          : entities.decodeHTML5('&degC')}
      </span>
    </TemperatureFlex>
  );
};

export default TemperatureRange;
