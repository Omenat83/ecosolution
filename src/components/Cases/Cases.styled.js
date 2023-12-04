import styled from 'styled-components';

export const CaseContainer = styled.section`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const CaseTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: relative;
    gap: 100px;

    &::before {
      content: '';
      position: absolute;
      right: 354px;
      display: block;
      width: 1px;
      height: 100%;
      background-color: var(--accent-main);
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 383px;

    &::before {
      right: 619px;
    }
  }
`;

export const CeseNav = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 126px;
  }

  @media screen and (min-width: 1280px) {
    gap: 193px;
  }
`;

export const CasesTitle = styled.h2`
  width: 264px;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 264px;
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 398px;
  }
`;

export const CasesCount = styled.div`
  display: flex;
  width: 72px;
  justify-content: space-between;
  align-items: end;
  font-family: Fira Sans;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;
`;

export const TotalNumber = styled.p`
  color: rgba(23, 61, 51, 0.25);
`;

export const CaseBtnContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const CaseBtn = styled.button`
  width: 66px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid var(--text-main);
  background-color: transparent;

  @media screen and (min-width: 1280px) {
    &:hover {
      border: 1px solid var(--accent-main);

      & > svg {
        stroke: var(--accent-main);
      }
    }
  }
`;

export const CaseBtnIcon = styled.svg`
  width: 36px;
  height: 36px;
  stroke: var(--text-main);
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
