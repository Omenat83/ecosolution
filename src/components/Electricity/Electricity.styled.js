import styled from "styled-components";

export const ElectricityContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const ElectricityTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    width: 368px;
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 491px;
  }
`;

export const ElectricityVertLine = styled.div`
width: 1px;
height: 48px;
background-color: var(--accent-main);

  @media screen and (min-width: 768px) {
  height: 87px;
  }
`;

export const ElectricityCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const ElectricityAmount = styled.p`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  color: var(--accent-main);

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const ElectricityUnit = styled.span`
  font-size: 24px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
`;