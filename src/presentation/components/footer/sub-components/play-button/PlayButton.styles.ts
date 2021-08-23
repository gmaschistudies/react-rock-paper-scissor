import styled from 'styled-components';

export const StyledPlayButton = styled.button`
  min-width: 120px;
  min-height: 50px;
  background-color: #333;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  margin: 5px;

  &:hover {
    background-color: black;
    color: darkblue;
  }
`;
