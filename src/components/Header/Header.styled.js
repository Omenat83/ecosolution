import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const HeaderGetBtn = styled.button`
display: none;

@media screen and (min-width: 768px) {
  text-decoration: none;
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
`;
