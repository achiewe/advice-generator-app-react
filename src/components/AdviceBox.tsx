import styled from "styled-components";
import PatternMobile from "../images/pattern-divider-mobile.svg";
import IconDice from "../images/icon-dice.svg";

const AdviceBox = (): JSX.Element => {
  return (
    <BoxContainer>
      <div>
        <h3>ADVICE</h3>
        <p>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <img src={PatternMobile} alt="icon divider mobile" />
      </div>
      <button>
        <img src={IconDice} alt="icon dice" />
      </button>
    </BoxContainer>
  );
};

export default AdviceBox;

const BoxContainer = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: #313a48;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 24px 64px 24px;
  position: relative;
  border-radius: 10px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    h3 {
      font-size: 11px;
      font-weight: 800;
      line-height: 15px;
      letter-spacing: 3.4571425914764404px;
      text-align: center;
      color: #53ffaa;
    }

    p {
      font-size: 24px;
      font-weight: 800;
      line-height: 33px;
      letter-spacing: -0.2571428716182709px;
      text-align: center;
      color: #cee3e9;
    }
  }

  button {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #53ffaa;
    position: absolute;
    border: none;
    bottom: -30px;
  }
`;
