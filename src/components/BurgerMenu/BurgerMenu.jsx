import { useEffect } from 'react';
import svg from '../../img/icons/spriteSvg.svg';

import {
  ModalBackdrop,
  ModaContainer,
  ModalContent,
  ModalCloseBtnIcon,
  ModalCloseBtnText,
  ModalCloseBtn,
  ModalCloseLine,
  ModalItemIcon,
  ModalItemName,
  ModalItem,
  ModalNav,
} from './BurgerMenu.styled';

const BurgerMenu = ({ setShowModal }) => {
  const menuItems = [
    { menu: 'Main', link: 'main' },
    { menu: 'About', link: 'about' },
    { menu: 'Cases', link: 'cases' },
    { menu: 'FAQ', link: 'faq' },
    { menu: 'Contact Us', link: 'contact us' },
  ];

  useEffect(() => {
    const handleKeyDown = e => {
      setShowModal(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowModal]);

  return (
    <>
      <ModalBackdrop onClick={() => setShowModal(false)}>
        <ModaContainer>
          <ModalContent>
            <div>
              <ModalCloseBtn type="button" onClick={() => setShowModal(false)}>
                <ModalCloseBtnIcon>
                  <use href={`${svg}#icon-cross`} />
                </ModalCloseBtnIcon>
                <ModalCloseBtnText>close</ModalCloseBtnText>
              </ModalCloseBtn>
              <ModalCloseLine></ModalCloseLine>
            </div>

            <ModalNav>
              {menuItems.map((item, index) => {
                return (
                  <ModalItem key={index} href={`#${item.link}`}>
                    <ModalItemName>{item.menu}</ModalItemName>
                    <ModalItemIcon>
                      <use href={`${svg}#icon-arrow-right-top`} />
                    </ModalItemIcon>
                  </ModalItem>
                );
              })}
            </ModalNav>
          </ModalContent>
        </ModaContainer>
      </ModalBackdrop>
    </>
  );
};

export default BurgerMenu;
