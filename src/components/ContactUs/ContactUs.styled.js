import styled from 'styled-components';

export const ContactsMainContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
  }
`;

export const ContactsContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 244px;
  }

  @media screen and (min-width: 1280px) {
    width: 466px;
  }
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 36px;
    margin-top: 120px;
  }
`;

export const ContactsTypeName = styled.p`
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ContactsIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--text-main);
  fill: transparent;
`;

export const ContactsPoint = styled.span`
  font-family: Fira Sans;
  font-size: 20px;
  letter-spacing: -0.8px;
  color: var(--text-main);

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const ContactsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    &:hover {
      & > svg {
        stroke: var(--accent-main);
      }
    }
  }
`;

export const ContactsPhone = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const ContactsType = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-top: 0;
    }
  }
`;

export const ContactsSocial = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const ContactsSocialLink = styled.ul`
  display: flex;
  gap: 32px;
`;
