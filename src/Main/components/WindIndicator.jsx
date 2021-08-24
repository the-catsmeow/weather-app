import styled from 'styled-components';
import { NearMe } from '@styled-icons/material-rounded';

const WindDirectionFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Raleway';
  font-size: 14px;
  font-weight: 500;

  & span {
    margin-left: 8px;
  }
`;

const WindDirectionIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.3);
  transform: rotate(${(props) => props.direction}deg);

  & > svg {
    height: 20px;
    width: 20px;
    color: #e7e7eb;
  }
`;

const WindIndicator = ({ direction, compass }) => {
  return (
    <WindDirectionFlex>
      <WindDirectionIndicator direction={direction}>
        <NearMe />
      </WindDirectionIndicator>
      <span>{compass}</span>
    </WindDirectionFlex>
  );
};

export default WindIndicator;
