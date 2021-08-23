import styled from 'styled-components';

export const StyledDashboard = styled.div`
  width: 100%;
  height: 200px;
  background-color: darkcyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;

  h1 {
    font-size: 26px;
    font-weight: bold;
  }
`;

export const ScoreCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  margin: 5px;
`;
