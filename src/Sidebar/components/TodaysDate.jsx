import { format, parse } from 'date-fns';
import styled from 'styled-components';

const TodayDateFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: #88869d;
`;

const TodaysDate = ({ todaysDate }) => {
  return (
    <TodayDateFlex>
      <span>Today</span>
      <span style={{ margin: '0 0.75em ' }}>•</span>
      <span>
        {format(parse(todaysDate, 'yyyy-MM-dd', new Date()), 'EEE d MMM')}
      </span>
    </TodayDateFlex>
  );
};

export default TodaysDate;
