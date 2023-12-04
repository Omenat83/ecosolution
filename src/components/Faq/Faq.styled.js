import styled from 'styled-components';

export const FaqContainer = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const FaqTitle = styled.h2`
  width: 264px;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 347px;
    position: absolute;
    left: 366px;
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    width: 398px;
    left: 781px;
    font-size: 48px;
    line-height: 48px;
    width: 398px;
  }
`;

export const FaqQuestionContainerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
    margin-top: 24px;
    padding-bottom: 24px;
  }
`;

export const FaqQuestionContainer = styled.div`
  & > div:nth-last-child(1) {
    & > div:nth-child(2) {
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
  }
`;

export const FaqBtn = styled.button`
  width: 16px;
  height: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const FaqBtnIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const FaqQuestion = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const FaqAnswearContainer = styled.div`
  padding: 0 0 16px 24px;

  @media screen and (min-width: 768px) {
    padding-left: 44px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 52px;
    padding-bottom: 24px;
  }
`;

export const FaqAnswear = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const FaqHelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 300px;
    position: absolute;
    left: 366px;
    bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    left: 781px;
    width: 300px;
    width: 400px;
  }
`;

export const FaqHelp = styled.p`
  font-family: Fira Sans;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const FaqHelpBtn = styled.a`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  padding: 10px 16px;
  border-radius: 100px;
  border: none;
  background-color: var(--accent-main);

  @media screen and (min-width: 1280px) {
    &:hover {
      background-color: var(--text-main);
      & > span {
        color: var(--accent-main);
      }

      & > svg {
        fill: var(--accent-main);
      }
    }
  }
`;

export const FaqHelpBtnText = styled.span`
  width: 72px;
  color: var(--text-main);
  font-family: Fira Sans;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const FaqHelpBtnIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--text-main);
`;
