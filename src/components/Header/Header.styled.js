import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isScroll }) => (isScroll ? '#FFF' : 'transparent')};
`;

export const HeaderNavContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 12px;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
`;

export const HeaderLogoIcon = styled.svg`
  fill: var(--text-main);

  @media screen and (min-width: 1280px) {
    &:hover {
      fill: var(--accent-main);
    }
  }
`;

export const HeaderMenuBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--accent-light);
  border: none;

  @media screen and (min-width: 1280px) {
    &:hover {
      background: var(--accent-main);
    }
  }
`;

export const HeaderMenuIcon = styled.svg`
  stroke: var(--text-main);
`;

export const HeaderGetIcon = styled.svg`
  fill: var(--text-main);
`;

export const HeaderGetText = styled.span`
  color: var(--text-main);
  font-family: Fira Sans;
`;

export const HeaderGetBtn = styled.a`
  display: none;

  @media screen and (min-width: 768px) {
    text-decoration: none;
    box-sizing: border-box;
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: var(--accent-main);
    padding: 10px 16px;
    border-radius: 100px;
    border: none;
    font-size: 16px;
    letter-spacing: -0.64px;
  }

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
