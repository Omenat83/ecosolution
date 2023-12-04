import Line from 'components/Line/Line';
import svg from '../../img/icons/spriteSvg.svg';

import {
  FooterLogoIcon,
  FooterContainer,
  FooterLogo,
  FooterSocialIcon,
  FooterSocial,
  FooterTop,
  FooterBottom,
  FooterBottomText,
  FooterUpIcon,
  FooterUp,
  FooterBottomEmail,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Line />

      <FooterTop>
        <FooterLogo>
          <svg width={31} height={46}>
            <use href={`${svg}#icon-logo1`} />
          </svg>
          <FooterLogoIcon width={170} height={40}>
            <use href={`${svg}#icon-logo2`} />
          </FooterLogoIcon>
          <svg width={60} height={48}>
            <use href={`${svg}#icon-logo3`} />
          </svg>
        </FooterLogo>
        <FooterSocial>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FooterSocialIcon>
              <use href={`${svg}#icon-facebook`}></use>
            </FooterSocialIcon>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FooterSocialIcon>
              <use href={`${svg}#icon-instagram`}></use>
            </FooterSocialIcon>
          </a>
        </FooterSocial>

        <FooterUp>
          <a href="#main">
            <FooterUpIcon>
              <use href={`${svg}#icon-arrow-up`} />
            </FooterUpIcon>
          </a>
        </FooterUp>
      </FooterTop>

      <FooterBottom>
        <a
          href="https://www.google.com/maps?q=79005+Ukraine+Lviv+Shota+Rustaveli+7"
          target="_blank"
          rel="noreferrer"
        >
          <FooterBottomText>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </FooterBottomText>
        </a>
        <FooterBottomEmail>
          <a href="mailto:office@ecosolution.com">
            <FooterBottomText>office@ecosolution.com</FooterBottomText>
          </a>
        </FooterBottomEmail>

        <FooterBottomText>ecosolution © 2023</FooterBottomText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
