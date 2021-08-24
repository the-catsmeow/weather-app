import styled from 'styled-components';

const LocationMenuLayout = styled.div`
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

export default LocationMenuLayout;
