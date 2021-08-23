import React, { useState } from 'react';
import styled from 'styled-components';
import { Close, Search, ChevronRight } from '@styled-icons/material-rounded';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  max-width: 459px;
  min-width: 300px;
  background-color: #1e213a;
  min-height: 100vh;
  padding: 2rem 1em;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
  }
`;

const CloseButton = styled.button`
  height: 30px;
  width: 30px
  outline: none;
  border: none;
  background: transparent;
  align-self: flex-end;
  color: #e7e7eb;

  & svg {
    height: 30px; 
    width: 30px;
  }
`;

const SearchFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  padding: 15px;
  border: 1px solid #e7e7eb;
  color: #616475;
  height: 48px;

  width: 70%;
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  flex-shrink: 0;
`;

const SearchIcon = () => {
  return (
    <SearchIconBox>
      <Search />
    </SearchIconBox>
  );
};

const SearchInput = styled.input`
  font-family: 'Raleway';
  background: transparent;
  height: 16px;
  font-size: 16px;
  outline: none;
  border: none;
  color: white;
`;

const SearchButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  font-family: 'Raleway';
  font-size: 16px;
  padding: 12px;
  color: #e7e7eb;
  background: #3c47e9;
  height: 48px;

  &:active {
    transform: scale(1.05);
  }
`;

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

const LocationMenu = ({ closeHandler, setLocation, BASE_URL }) => {
  const [locationInput, setLocationInput] = useState('');
  const [locationResults, setLocationResults] = useState([]);

  const onClickSearchHandler = async () => {
    let locationRequest = await fetch(
      BASE_URL + '/location/search/?query=' + locationInput
    );
    let locationResponse = await locationRequest.json();

    setLocationResults(locationResponse);
  };

  const onClickLocationResultHandler = (latt_long) => {
    const delimeterIdx = latt_long.indexOf(',');
    const latitude = latt_long.substring(0, delimeterIdx);
    const longitude = latt_long.substring(delimeterIdx + 1);

    setLocation({
      latitude,
      longitude,
    });

    closeHandler();
  };

  return (
    <Section>
      <CloseButton onClick={closeHandler}>
        <Close />
      </CloseButton>
      <SearchFlex>
        <SearchBox>
          <SearchIcon />
          <SearchInput
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="search location"
          />
        </SearchBox>
        <SearchButton onClick={() => onClickSearchHandler()}>
          Search
        </SearchButton>
      </SearchFlex>
      <Locations>
        {locationResults.map((location, idx) => {
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
    </Section>
  );
};

export default LocationMenu;
