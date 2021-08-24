import styled from 'styled-components';

const HighlightsGrid = styled.div`
  width: 100%;
  height: 40vw;
  display: grid;
  grid-gap: 3em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 3fr;
  grid-template-areas:
    'wind humidity'
    'visibility air-pressure';

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'wind'
      'humidity'
      'visibility'
      'air-pressure';
    height: auto;
  }
`;

export default HighlightsGrid;
