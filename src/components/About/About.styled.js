import styled from 'styled-components';
import man1ImageTab from '../../img/man1-tab.jpg';
import man1ImageDesk from '../../img/man1-deck.jpg';
import man2ImageTab from '../../img/man2-tab.jpg';
import man2ImageDesk from '../../img/man2-deck.jpg';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 36px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    flex-direction: row;
    gap: 94px;

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
    margin-top: 120px;
    gap: 416px;

    &::before {
      right: 619px;
    }
  }
`;

export const AboutTitle = styled.h2`
  font-size: 28px;
  line-height: 28px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 272px;
    font-size: 36px;

    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 365px;
  }
`;

export const AboutText = styled.p`
  font-family: Fira Sans;
  text-align: justify;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    width: 342px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 459px;
    margin-top: 3px;
  }
`;

export const AboutGrid = styled.div`
  display: inline-grid;
  margin-top: 36px;
  grid-template-columns: minmax(148px, 208px) minmax(148px, 208px);
  grid-template-rows: 197px 197px;
  grid-gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    grid-auto-flow: row;
    grid-template-columns: 159px 159px 159px 159px;
    grid-template-rows: 197px 197px;

    & > div:nth-child(3) {
      grid-column: span 2;
      border: none;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(${man2ImageTab});
    }

    & > div:nth-child(4) {
      grid-column: span 2;
      border: none;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(${man1ImageTab});
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 122px;
    grid-gap: 48px;
    grid-template-columns: 274px 274px 274px 274px;
    grid-template-rows: 339px 339px;

    & > div:nth-child(3) {
      background-image: url(${man2ImageDesk});
    }

    & > div:nth-child(4) {
      background-image: url(${man1ImageDesk});
    }
  }
`;

export const AboutGridPhoto = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const AboutGridItem = styled.div`
  background-color: var(--backgroung-article);
  padding: 13px 12px 12px 12px;

  @media screen and (min-width: 1280px) {
    padding: 48px 24px;
  }
`;

export const AboutItemIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--text-main);
  fill: transparent;

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const AboutItemTitle = styled.h3`
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const AboutItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    margin-bottom: 51px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 94px;
  }
`;
export const AboutItemText = styled.div`
  margin-top: 12px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1280px) {
    margin-top: 24px;
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
