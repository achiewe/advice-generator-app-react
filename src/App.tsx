import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import AdviceContaier from "./components/AdviceContainer";

function App(): JSX.Element {
  return (
    <StyledMain>
      <GlobalStyles />
      <AdviceContaier />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex-direction;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202733;
  padding: 0 16px;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;
export default App;
