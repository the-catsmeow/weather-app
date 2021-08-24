import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/material-rounded';

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

const LocationSearch = ({
  value,
  onChangeHandler,
  placeholder,
  onClickSearchHandler,
}) => {
  return (
    <SearchFlex>
      <SearchBox>
        <SearchIcon />
        <SearchInput
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder={placeholder}
        />
      </SearchBox>
      <SearchButton onClick={() => onClickSearchHandler()}>Search</SearchButton>
    </SearchFlex>
  );
};

export default LocationSearch;
