import React from 'react';
import styled from 'styled-components';
import { MyLocation } from '@styled-icons/material-outlined';

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

const SearchLocator = ({ openLocationHandler, buttonText, getLocation }) => {
  return (
    <SearchRow>
      <SearchButton onClick={openLocationHandler}>{buttonText}</SearchButton>
      <Locater
        onClick={() => {
          getLocation();
        }}
      />
    </SearchRow>
  );
};

export default SearchLocator;
