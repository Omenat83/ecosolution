import React from 'react';
import { Formik, Form } from 'formik';
import Line from 'components/Line/Line';
import Schema from './Schema';
import svg from '../../img/icons/spriteSvg.svg';

import {
  FormContainer,
  FormItem,
  FormItemLabel,
  FormItemField,
  FormItemError,
  FormItemBtn,
  FormItemBtnText,
  FormItemBtnRound,
  FormItemBtnIcon,
} from './Form.styled';

const ContactUsForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleOnSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={handleOnSubmit}
      >
        {formik => (
          <Form>
            <FormItem>
              <FormItemLabel htmlFor="fullName">* Full Name:</FormItemLabel>
              <FormItemField
                id="fullName"
                type="text"
                name="fullName"
                placeholder="John Rosie"
                required
              />
              {formik.errors.fullName ? (
                <Line color="var(--error-message)" />
              ) : (
                <Line />
              )}
              <FormItemError name="fullName" component="div" />
            </FormItem>
            <FormItem>
              <FormItemLabel htmlFor="email">* E-mail:</FormItemLabel>
              <FormItemField
                id="email"
                type="email"
                name="email"
                placeholder="johnrosie@gmail.com"
                required
              />
              {formik.errors.email ? (
                <Line color="var(--error-message)" />
              ) : (
                <Line />
              )}
              <FormItemError name="email" component="div" />
            </FormItem>
            <FormItem>
              <FormItemLabel htmlFor="phone">* Phone</FormItemLabel>
              <FormItemField
                id="phone"
                name="phone"
                placeholder="380961234567"
                required
              />
              {formik.errors.phone ? (
                <Line color="var(--error-message)" />
              ) : (
                <Line />
              )}
              <FormItemError name="phone" component="div" />
            </FormItem>
            <FormItem>
              <FormItemLabel htmlFor="message">Message</FormItemLabel>
              <FormItemField
                className="message"
                type="text"
                name="message"
                placeholder="My message"
              />
              <Line />
            </FormItem>
            <FormItemBtn type="submit">
              <FormItemBtnText>Send</FormItemBtnText>
              <FormItemBtnRound>
                <FormItemBtnIcon>
                  <use href={`${svg}#icon-arrow-right`} />
                </FormItemBtnIcon>
              </FormItemBtnRound>
            </FormItemBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ContactUsForm;
