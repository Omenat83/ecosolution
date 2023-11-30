import svg from '../../img/icons/spriteSvg.svg';
import {
  HeaderLogo,
  HeaderLogoIcon,
  HeaderMenuIcon,
  HeaderMenuBtn,
  HeaderGetIcon,
  HeaderGetText,
  HeaderGetBtn,
  HeaderContainer,
  HeaderNavContainer,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <svg width={31} height={46}>
          <use href={`${svg}#icon-logo1`} />
        </svg>
        <HeaderLogoIcon width={170} height={40}>
          <use href={`${svg}#icon-logo2`} />
        </HeaderLogoIcon>
        <svg width={60} height={48}>
          <use href={`${svg}#icon-logo3`} />
        </svg>
      </HeaderLogo>
      <HeaderNavContainer>
        <HeaderMenuBtn type="button">
          <HeaderMenuIcon width={20} height={20}>
            <use href={`${svg}#icon-burger-menu`} />
          </HeaderMenuIcon>
        </HeaderMenuBtn>
        <HeaderGetBtn href="#contact us">
          <HeaderGetText>Get in touch</HeaderGetText>
          <HeaderGetIcon width={14} height={14}>
            <use href={`${svg}#icon-circle`} />
          </HeaderGetIcon>
        </HeaderGetBtn>
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

export default Header;
