import styled from 'styled-components';

const HighlightFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.5em;
  color: #e7e7eb;
  background: #1e213a;
`;

const HighlightName = styled.span`
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 500;
`;

const HighlightStat = styled.div`
  font-family: Raleway;
  font-size: 4em;
  font-weight: 700;
  & .highlight-name {
    font-size: 0.5em;
  }
`;

const HighlightTile = ({ children, highlightName, stat, suffix }) => {
  return (
    <HighlightFlex>
      <HighlightName>{highlightName}</HighlightName>
      <HighlightStat>
        {Math.round(stat)}
        <span className="highlight-name"> {suffix}</span>
      </HighlightStat>
      {children}
    </HighlightFlex>
  );
};

export default HighlightTile;
