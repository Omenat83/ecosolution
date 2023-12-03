import * as Yup from 'yup';
import { nameRegex, phoneRegex } from '../../utils/regex';

const Schema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full Name is required')
    .min(5, 'Too short')
    .max(40, 'Too long')
    .matches(nameRegex, 'Wrong Fullname'),
  email: Yup.string().required('Email is required').email('Wrong email'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(phoneRegex, 'Phone should contain 12 digits'),
});

export default Schema;
