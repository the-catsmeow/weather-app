import React from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/material-rounded';

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

const CloseLocationSearch = ({ onClickHandler }) => {
  return (
    <CloseButton onClick={onClickHandler}>
      <Close />
    </CloseButton>
  );
};

export default CloseLocationSearch;
