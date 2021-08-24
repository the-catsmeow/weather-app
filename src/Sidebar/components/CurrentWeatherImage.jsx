import React from 'react';
import styled from 'styled-components';

import { cloudBackground } from '../../assets';
import { getWeatherImg } from '../../utility/util';

const CurrentWeatherImg = styled.div`
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

const CurrentWeatherImage = ({ currentWeatherAbbr }) => {
  return (
    <CurrentWeatherImg>
      <BackgroundOverlay />
      <img src={getWeatherImg(currentWeatherAbbr)} alt="current weather" />
    </CurrentWeatherImg>
  );
};

export default CurrentWeatherImage;
