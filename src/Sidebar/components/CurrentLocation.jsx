import styled from 'styled-components';
import { Place } from '@styled-icons/material';

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

const CurrentLocation = ({ currentLocation }) => {
  return (
    <CurrentLocationFlex>
      <Place />
      <span>{currentLocation}</span>
    </CurrentLocationFlex>
  );
};

export default CurrentLocation;
