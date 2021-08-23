import styled from 'styled-components';

export const StyledRestartButton = styled.button`
  min-width: 80px;
  min-height: 30px;
  background-color: #333;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: black;
    color: darkblue;
  }
`;
