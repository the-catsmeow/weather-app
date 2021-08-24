import styled from 'styled-components';

const entities = require('entities');

const ScaleFlex = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  align-self: flex-end;
  align-items: center;
`;

const ScaleButton = styled.button`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-family: "Raleway"
font-size: 18px;
margin: 0 6px;
height: 40px;
width: 40px;
background: ${(props) => (props.active ? '#E7E7EB' : '#585676')};
border-radius: 50%;
border: none;
outline: none;
color: ${(props) => (props.active ? '#110E3C' : '#E7E7EB')};
`;

const ScaleToggle = ({ clickHandler, scale }) => {
  return (
    <ScaleFlex>
      <ScaleButton
        active={scale === 'celcius'}
        onClick={() => clickHandler('celcius')}
      >
        {entities.decodeHTML5('&degC')}
      </ScaleButton>
      <ScaleButton
        active={scale === 'fahrenheit'}
        onClick={() => clickHandler('fahrenheit')}
      >
        {entities.decodeHTML5('&degF')}
      </ScaleButton>
    </ScaleFlex>
  );
};

export default ScaleToggle;
