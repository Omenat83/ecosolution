import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import Line from 'components/Line/Line';
import Schema from './Schema';
import {
  FormContainer,
  FormItem,
  FormItemLabel,
  FormItemField,
  FormItemError,
} from './Form.styled';

const ContactUsForm = () => {
  //  const formik = useFormikContext();

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
              <Line />
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
              <Line />
              {/* {!formik.errors.email && <Line />} */}
              <FormItemError
                name="email"
                component="div"
                //   render={msg => {
                //       return (
                //           <>
                //               {/* {msg ? null : <p>dfgdfbfgh</p>}
                //               <div>{msg}</div> */}
                //               <Line
                //                   color={'var(--error-message)'}
                //               />
                //           </>
                //       );
                //   }}
              />
            </FormItem>

            <FormItem>
              <FormItemLabel htmlFor="phone">* Phone</FormItemLabel>
              <FormItemField
                id="phone"
                //   type="text"
                name="phone"
                placeholder="380961234567"
                required
              />
              <Line />

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

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ContactUsForm;
