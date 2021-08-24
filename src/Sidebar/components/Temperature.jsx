import React from 'react';
import styled from 'styled-components';

const entities = require('entities');

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

const Temperature = ({ currentTemperature, currentScale }) => {
  return (
    <TemperatureFlex>
      <span>{currentTemperature.toFixed(0)}</span>
      <span>
        {entities.decodeHTML5('&deg')}
        {currentScale === 'celcius' ? 'C' : 'F'}
      </span>
    </TemperatureFlex>
  );
};

export default Temperature;
