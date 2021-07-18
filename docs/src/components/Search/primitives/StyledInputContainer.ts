import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  position: relative;
  box-shadow: ${({ theme }) => theme.orbit.elevationActionBoxShadow};
  padding: 10px 1.5em;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  font-size: 1em;
  cursor: text;
  width: 100%;
`;

export default StyledInputContainer;
