import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Email is required'),
})

export default schema;