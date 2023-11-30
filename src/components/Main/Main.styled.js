import styled from 'styled-components';
import mainImageMob from '../../img/wind-turbine-mob.jpg';
import mainImageTab from '../../img/wind-turbine-tab.jpg';
import mainImageDesk from '../../img/wind-turbine-deck.jpg';

export const MainContainer = styled.div`
  margin-top: 146px;

  @media screen and (min-width: 768px) {
    margin-top: 164px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

export const MainContTab = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 66px;
    height: 144px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 296px;
    height: 128px;
    margin-bottom: 24px;
  }
`;

export const MainTitle = styled.h2`
  font-size: 36px;
  letter-spacing: 0;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
    width: 485px;
  }
`;

export const MainText = styled.p`
  margin-top: 24px;
  font-family: Fira Sans;
  text-align: justify;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    width: 342px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 363px;
    margin-top: 8px;
  }
`;

export const MainBtn = styled.button`
  max-width: 143px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 4px 4px 4px 16px;
  border-radius: 100px;
  border: 1px solid var(--accent-main);
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 43px;
    margin-left: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 20px;
  }
`;

export const MainBtnText = styled.span`
  color: var(--text-main);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.64px;
`;

export const MainArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background-color: var(--accent-main);
`;

export const MainIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--text-main);
  fill: transparent;
`;
export const MainContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;

    & > p:nth-child(2) {
      margin-left: 77px;
    }

    & > p:nth-child(3) {
      margin-left: 50px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 12px;

    & > p:nth-child(2) {
      margin-left: 492px;
    }

    & > p:nth-child(3) {
      margin-left: 167px;
    }
  }
`;

export const MainTradeMark = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const MainImgThumb = styled.div`
  width: 320px;
  height: 200px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${mainImageMob});
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    width: 708px;
    height: 348px;

    background-image: url(${mainImageTab});
  }

  @media screen and (min-width: 1280px) {
    margin-top: 36px;
    width: 1240px;
    height: 542px;

    background-image: url(${mainImageDesk});
  }
`;
