import styled from 'styled-components';

export const StyledHome = styled.div`
  height: 700px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  margin: auto;
  background-color: #444;
`;

export const StyledHomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  //cannot use this to center because when the item is bigger than the container, the top of the container becomes inacessible, use margin: auto on the item instead
  box-sizing: border-box;
  padding: 0px 20px;
`;
