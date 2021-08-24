import styled from 'styled-components';

export const StyledGameResults = styled.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-top: 3px solid white;

  h3 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 30px;
    font-weight: bold;
  }
`;
