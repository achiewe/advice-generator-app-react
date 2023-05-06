import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import AdviceBox from "./components/AdviceBox";

function App(): JSX.Element {
  return (
    <StyledMain>
      <GlobalStyles />
      <AdviceBox />
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
