import svg from '../../img/icons/spriteSvg.svg';
import Line from 'components/Line/Line';
import {
  MainTitle,
  MainContainer,
  MainText,
  MainBtn,
  MainArrow,
  MainIcon,
  MainBtnText,
  MainContacts,
  MainImgThumb,
  MainContTab,
  MainTradeMark,
} from './Main.styled';

const Main = () => {
  return (
    <MainContainer>
      <MainContTab>
        <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
        <div>
          <MainText>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </MainText>

          <MainBtn href="#cases">
            <MainBtnText>Learn more</MainBtnText>
            <MainArrow>
              <MainIcon>
                <use href={`${svg}#icon-arrow-right`} />
              </MainIcon>
            </MainArrow>
          </MainBtn>
          
        </div>
      </MainContTab>
      <Line />
      <MainContacts>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <p>office@ecosolution.com</p>
        <MainTradeMark>ecosolution © 2023</MainTradeMark>
      </MainContacts>
      <MainImgThumb></MainImgThumb>
    </MainContainer>
  );
};

export default Main;
