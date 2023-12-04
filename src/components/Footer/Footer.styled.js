import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  gap: 4px;
  justify-content: start;
`;

export const FooterLogoIcon = styled.svg`
  fill: var(--text-main);
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const FooterSocialIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--text-main);
  fill: transparent;
`;

export const FooterTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    gap: 97px;
  }

  @media screen and (min-width: 1280px) {
    gap: 512px;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;

    & > span {
      margin-left: 50px;
    }
  }

  @media screen and (min-width: 1280px) {

    & > span {
      margin-left: 167px;
    }
  }
`;

export const FooterBottomEmail = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 77px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 492px;
  }
`;

export const FooterBottomText = styled.span`
  font-family: Fira Sans;
  font-size: 16px;
  letter-spacing: -0.64px;
  color: var(--text-main);

  @media screen and (min-width: 768px) {
  }
`;

export const FooterUp = styled.div`
  position: absolute;
  right: 0;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-main);
  border-radius: 50%;
`;

export const FooterUpIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--text-main);
`;
