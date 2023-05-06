import styled from "styled-components";
import PatternMobile from "../images/pattern-divider-mobile.svg";
import PatternDesktop from "../images/pattern-divider-desktop.svg";
import IconDice from "../images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  id: number;
  advice: string;
}

const AdviceContaier = (): JSX.Element => {
  const [adviceInfo, setAdviceInfo] = useState<Props | null>(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data;
      setAdviceInfo(data);
    };
    requestData();
  }, [click]);
  console.log(adviceInfo);

  const changeInfo = () => {
    setClick(!click);
  };

  return (
    <BoxContainer>
      <div>
        <h3>ADVICE {adviceInfo?.id}</h3>
        <p>{adviceInfo?.advice}</p>
      </div>
      <img
        className="divider-mobile"
        src={PatternMobile}
        alt="icon divider mobile"
      />
      <img
        className="divider-desktop"
        src={PatternDesktop}
        alt="icon divider desktop"
      />

      <button onClick={changeInfo}>
        <img src={IconDice} alt="icon dice" />
      </button>
    </BoxContainer>
  );
};

export default AdviceContaier;

const BoxContainer = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: #313a48;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px 24px 64px 24px;
  position: relative;
  border-radius: 10px;
  @media (min-width: 1024px) {
    padding: 40px 48px 72px 48px;
    gap: 40px;
  }

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
      @media (min-width: 1024px) {
        font-size: 13px;
        line-height: 17.76px;
        letter-spacing: 4.09px;
      }
    }

    p {
      font-size: 24px;
      font-weight: 800;
      line-height: 33px;
      letter-spacing: -0.2571428716182709px;
      text-align: center;
      color: #cee3e9;
      @media (min-width: 1024px) {
        font-size: 28px;
        line-height: 38px;
        letter-spacing: -0.30000001192092896px;
      }
    }
  }

  .divider-desktop {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .divider-mobile {
    display: block;
    @media (min-width: 1024px) {
      display: none;
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
    @media (min-width: 1024px) {
      cursor: pointer;
      :hover {
        background-color: #53ffaa;
        box-shadow: 0px 0px 40px #53ffaa;
      }
    }
  }
`;
