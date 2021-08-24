import styled from 'styled-components';

export const StyledScoreCard = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #333;
  border: 2px solid white;
  border-radius: 10px;

  h3,
  h4 {
    font-size: 26px;
    font-weight: bold;
  }
`;
