import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/material-rounded';

const Locations = styled.div`
  display: flex;
  margin-top: 2em;
  width: 100%;
  flex-direction: column;
  gap: 1em;
`;

const LocationFlex = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  width: 100%;
  padding: 1em;
  border: 1px solid transparent;

  & span {
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 500;
    color: #e7e7eb;
  }

  &:hover {
    border: 1px solid #616475;
  }
`;

const LocationList = ({ locations, onClickLocationResultHandler }) => {
  return (
    <Locations>
      {locations.map((location, idx) => {
        return (
          <LocationFlex
            key={idx}
            onClick={() => onClickLocationResultHandler(location.latt_long)}
          >
            <span>{location.title}</span>
            <ChevronRight
              style={{ height: '16px', width: '16px', color: '#616475' }}
            />
          </LocationFlex>
        );
      })}
    </Locations>
  );
};

export default LocationList;
