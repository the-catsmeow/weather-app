import styled from 'styled-components';

const HumidityBarContainer = styled.div`
  display: grid;
  width: 100%;
`;

const HumidityBarScale = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  color: #a09fb1;
  font-family: 'Raleway';
  font-size: 12px;
  font-weight: 700;
`;

const HumidityBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #e7e7eb;
  border-radius: 80px;

  &::before {
    height: 8px;
    content: '';
    position: absolute;
    width: ${(props) => props.percentage}%;
    border-radius: 80px;
    background: #ffec65;
    top: 0;
    left: 0;
  }
`;

const HumidityGraph = ({ percentage }) => {
  return (
    <HumidityBarContainer>
      <HumidityBarScale>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </HumidityBarScale>
      <HumidityBar percentage={percentage} />
    </HumidityBarContainer>
  );
};

export default HumidityGraph;
