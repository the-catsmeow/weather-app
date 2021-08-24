import styled from 'styled-components';

const MainLayout = styled.section`
  display: flex;
  flex-direction: column;
  width: 72%;
  background-color: #100e1d;
  min-height: 100vh;
  align-items: flex-start;
  padding: 20px 5% 20px 5%;
  padding-bottom: 3em;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 1500px) {
    font-size: 1.5em;
  }
`;

export default MainLayout;
