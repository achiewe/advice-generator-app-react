import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App(): JSX.Element {
  return (
    <StyledMain>
      <GlobalStyles />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex-direction;
  justify-content: center;
  align-items: center;
  background-color: #202733;
  padding: 0 16px;
`;
export default App;
