import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

export const FormItemFieldMessage = styled(Field)``;

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
