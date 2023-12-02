import styled from 'styled-components';

export const SwiperContainer = styled.div`
  margin-top: 20px;
  background-color: var(--backgroung-article);
  font-family: Fira Sans;

  @media screen and (min-width: 768px) {
    margin-top: 38px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const SwiperPhotoImg = styled.img`
  width: 320px;
  height: 168px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    height: 296px;
  }
`;

export const SwiperPhotoDescription = styled.div`
  padding: 14px 12px 12px 12px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const DescriptionTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const DescriptionTitle = styled.div`
  width: 200px;
  height: 66px;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.92px;

  @media screen and (min-width: 768px) {
    height: 72px;
    font-size: 20px;
    letter-spacing: -0.88px;
    width: 230px;
  }

  @media screen and (min-width: 1280px) {
    height: 58px;
    font-size: 24px;
    letter-spacing: -0.96px;
    width: 357px;
  }
`;

export const DescriptionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: var(--accent-main);
  border: none;
  margin-top: 5px;
`;

export const DescriptionBtnIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--text-main);
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Descriptionbottom = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
    margin-top: 24px;
  }
`;
