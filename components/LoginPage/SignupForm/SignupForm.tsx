import axios from 'axios';
import styles from './SignupForm.module.scss';
import { useForm } from 'react-hook-form';
import API_ROUTES from '@/routes/apiRoutes';
import { useState } from "react";
import schema from './validation';
import { yupResolver } from "@hookform/resolvers/yup";
import errorStyles from '../errorStyles';

interface MyForm {
  email: string,
  password: string,
  confirm: string,
}

const SignupForm = () => {
  const [customError, setError] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<MyForm>({
    defaultValues: {},
    resolver: yupResolver(schema),
    mode: "onSubmit",
  })

  const submit = async (data) => {
    try {
      setError(null);

      const dataToSignUp = {
      name: data.email,
      email: data.email,
      password: data.password,
      };

    console.log(dataToSignUp);

    const response = await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2${API_ROUTES.SIGNUP}`, dataToSignUp);

    console.log(response);

    reset()
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        console.log(e.response.data.message);
        setError(e.response.data.message);
      } else {
        console.log('An error occurred:', e.message);
      }
    }
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">
          <p>Email</p>
        </label>
        <input type="email" id="email" placeholder="Your login"  {...register('email')} />
        <p style={errorStyles}>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input type="password" id="password" placeholder="Your password"  {...register('password')} />
        <p style={errorStyles}>{errors.password?.message}</p>
      </div>
      <div>
        <label htmlFor="confirm-password">
          <p>Confirm password</p>
        </label>
        <input type="password" id="confirm-password" placeholder="Confirm password"  {...register('confirm')} />
        <p style={errorStyles}>{errors.confirm?.message}</p>
      </div>
      {customError && <p style={errorStyles}>{customError}</p>}
      <button type="submit">Signup</button>
    </form>
  );
}

export default SignupForm;