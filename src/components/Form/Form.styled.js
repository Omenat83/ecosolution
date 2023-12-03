import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  /* width: 320px; */
  background-color: var(--backgroung-article);
  padding: 36px 12px;

  & > form > div:nth-child(n + 2) {
    margin-top: 28px;
  }
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const FormItemLabel = styled.label`
  display: inline-block;
  width: 296px;
  font-family: Fira Sans;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const FormItemField = styled(Field)`
  width: 320px;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
  color: var(--text-main);

  ::placeholder {
    color: var(--placeholder);
  }

  &.message {
    width: 100%;
    height: 140px;
  }
`;

export const FormItemError = styled(ErrorMessage)`
  position: absolute;
  right: 0;
  bottom: -22px;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  color: var(--error-message);
`;

export const FormItemBtn = styled.button`
  width: 100px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-right: 0;
  margin-left: auto;
  padding-left: 16px;
  padding-right: 4px;
  border: 1px solid var(--accent-main);
  border-radius: 100px;
  background-color: transparent;
`;

export const FormItemBtnText = styled.span`
  font-family: Fira Sans;
  color: var(--text-main);
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.64px;
`;

export const FormItemBtnRound = styled.div`
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: var(--accent-main);
`;

export const FormItemBtnIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--text-main);
  fill: transparent;
`;
