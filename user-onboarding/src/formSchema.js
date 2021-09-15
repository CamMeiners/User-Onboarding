import * as yup from 'yup';

const schema =yup.object().shape({
    name: yup
    .string()
    .required('Name is required!')
    .min(2, 'Name must be at least 2 characters long'),
    email: yup
    .string()
    .email('Must be a valid email address!')
    .required('Email is required!'),
    password: yup
    .string()
    .required('Please provide a valid password!')
    .min(8, 'Password must be at least 8 characters!'),
    termsOfService: yup.boolean().oneOf([true], 'Please read the terms of service!'),
  })

  export default schema;