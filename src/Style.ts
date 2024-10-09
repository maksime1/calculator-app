import styled from "styled-components";

export const CalculatorContainer = styled.div`
  padding: 40px 24px 31px;
  @media (min-width: 1440px) {
    padding: 112px 450px 96px;
  }
  & > h2 {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.53px;
    color: #fff;
    margin-bottom: 35px;
  }
  .screen {
    padding: 29px 24px 22px 170px;
    border-radius: 10px;
    background-color: #181f33;
    border: none;
    width: 327px;
    margin-bottom: 24px;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -0.67px;
    display: flex;
    justify-content: end;
    color: #fff;
    @media (min-width: 1440px) {
      padding: 40px 32px 36px 323px;
      width: 580px;
    }
  }
  .calculate {
    background-color: #242d44;
    padding: 24px;
    border-radius: 10px;
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    @media (min-width: 1440px) {
      width: 580px;
      padding: 32px 32px 32px 30px;
      gap: 35px;
    }
  }
  .buttons {
    background-color: #eae3dc;
    padding: 13px 10px 11px;
    border-radius: 5px;
    box-shadow: inset 0 -4px 0 0 #b3a497;
    width: 60px;
    height: 64px;
    border: none;
    cursor: pointer;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.53px;
    color: #434a59;
    &:hover {
      background-color: #fffffe;
    }
    @media (min-width: 1440px) {
      width: 101px;
      height: 64px;
      padding: 13px 13px 11px 14px;
    }
  }
  .button {
    display: flex;
    gap: 13px;
    @media (min-width: 1440px) {
      gap: 24px;
      display: flex;
      margin-left: 20px;
    }
  }
  .reset {
    padding: 12px 24px;
    border-radius: 5px;
    box-shadow: inset 0 -4px 0 0 #414e73;
    border: none;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.33px;
    width: 133px;
    color: #fff;
    background-color: #647198;
    height: 64px;
    cursor: pointer;
    @media (min-width: 1440px) {
      padding: 13px 29px 11px 32px;
      width: 227px;
      &:hover {
        background-color: #a2b2e1;
      }
    }
  }
  .equal {
    padding: 12px 22px;
    border-radius: 5px;
    box-shadow: inset 0 -4px 0 0 #93261a;
    background-color: #d03f2f;
    border: none;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.33px;
    width: 133px;
    height: 64px;
    cursor: pointer;
    @media (min-width: 1440px) {
      padding: 13px 29px 11px 32px;
      width: 227px;
      &:hover {
        background-color: #f96b5b;
      }
    }
  }
`;
