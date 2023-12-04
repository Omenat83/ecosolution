import ContactUsForm from 'components/Form/Form';
import svg from '../../img/icons/spriteSvg.svg';
import {
  ContactsContainer,
  ContactsTitle,
  ContactsType,
  ContactsIcon,
  ContactsPoint,
  ContactsLink,
  ContactsPhone,
  ContactsTypeName,
  ContactsSocial,
  ContactsSocialLink,
  ContactsMainContainer,
} from './ContactUs.styled';

const ContactUs = () => {
  return (
    <>
      <ContactsTitle>Contact us</ContactsTitle>
      <ContactsMainContainer id="contact us">
        <ContactsContainer>
          <ContactsType>
            <ContactsTypeName>Phone:</ContactsTypeName>
            <ContactsPhone>
              <li>
                <ContactsLink href="tel:+380981234567">
                  <ContactsIcon>
                    <use href={`${svg}#icon-phone`}></use>
                  </ContactsIcon>
                  <ContactsPoint>38 (098) 12 34 567</ContactsPoint>
                </ContactsLink>
              </li>
              <li>
                <ContactsLink href="tel:+380931234567">
                  <ContactsIcon>
                    <use href={`${svg}#icon-phone`}></use>
                  </ContactsIcon>
                  <ContactsPoint>38 (093) 12 34 567</ContactsPoint>
                </ContactsLink>
              </li>
            </ContactsPhone>
          </ContactsType>

          <ContactsType>
            <ContactsTypeName>E-mail:</ContactsTypeName>
            <ContactsLink href="mailto:office@ecosolution.com">
              <ContactsIcon>
                <use href={`${svg}#icon-sms`}></use>
              </ContactsIcon>
              <ContactsPoint>office@ecosolution.com</ContactsPoint>
            </ContactsLink>
          </ContactsType>

          <ContactsType>
            <ContactsTypeName>Adress:</ContactsTypeName>
            <ContactsLink
              href="https://www.google.com/maps?q=79005+Ukraine+Lviv+Shota+Rustaveli+7"
              target="_blank"
              rel="noreferrer"
            >
              <ContactsIcon>
                <use href={`${svg}#icon-map`}></use>
              </ContactsIcon>
              <ContactsPoint>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactsPoint>
            </ContactsLink>
          </ContactsType>

          <ContactsSocial>
            <ContactsTypeName>Social networks:</ContactsTypeName>
            <ContactsSocialLink>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ContactsIcon>
                  <use href={`${svg}#icon-facebook`}></use>
                </ContactsIcon>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ContactsIcon>
                  <use href={`${svg}#icon-instagram`}></use>
                </ContactsIcon>
              </a>
            </ContactsSocialLink>
          </ContactsSocial>
        </ContactsContainer>

        <ContactUsForm />
      </ContactsMainContainer>
    </>
  );
};

export default ContactUs;
