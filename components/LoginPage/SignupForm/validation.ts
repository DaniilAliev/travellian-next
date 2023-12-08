import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password required').min(8, 'Password is min 8 letters'),
  confirm: yup.string().oneOf([yup.ref('password')], 'Passwords should match')
})

export default schema;