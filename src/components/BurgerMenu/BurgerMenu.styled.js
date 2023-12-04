import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background: var(--modal-backdrop);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const ModaContainer = styled.div`
  backdrop-filter: none;
  width: 320px;
  height: auto;
  padding: 36px 0;

  @media screen and (min-width: 768px) {
    width: 708px;
    display: flex;
    justify-content: end;
    padding-top: 42px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
    padding-top: 30px;
  }
`;

export const ModalContent = styled.div`
  width: 320px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  padding: 24px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  overflow: auto;
`;

export const ModalCloseBtn = styled.button`
  width: 70px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: transparent;
  border: none;
  outline: 0;
`;

export const ModalCloseBtnIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--text-white);
`;

export const ModalCloseBtnText = styled.span`
  color: var(--text-white);
  font-family: Fira Sans;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const ModalCloseLine = styled.div`
  width: 272px;
  height: 1px;
  background-color: var(--text-white);
  margin-top: 8px;
`;

export const ModalItemName = styled.p`
  font-family: Fira Sans;
  font-size: 24px;
  line-height: normal;
  letter-spacing: -0.96px;
color: ${props => props.color};
`;

export const ModalItemIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(255, 255, 255, 0.25);
  fill: transparent;
`;

export const ModalItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    cursor: pointer;

    & > p {
      color: var(--text-white);
    }

    & > svg {
      stroke: var(--text-white);
    }
  }
`;

export const ModalNav = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-top: 16px;
`;
