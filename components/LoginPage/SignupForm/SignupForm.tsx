import styles from './SignupForm.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import schema from './validation';
import { yupResolver } from "@hookform/resolvers/yup";
import errorStyles from '../errorStyles';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';

interface MyForm {
  email: string,
  password: string,
  confirm: string,
}

type SignInResult = {
  error: string | null;
  status: number;
};

const SignupForm = () => {
  const [customError, setError] = useState<null | string>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const router = useRouter()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<MyForm>({
    defaultValues: {},
    resolver: yupResolver(schema) as any,
    mode: "onSubmit",
  })

  const submit = async (data: MyForm) => {
    console.log('submitted')
    try {
      setError(null);
      setLoading(true);

      const result: SignInResult = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        action: 'signup',
      }) ?? { error: null, status: 0 };

      if (!result.error) {
        router.push('/');
      } 
      else if (result.status) {
        console.log(result)
        setError('User with this email is already exists');
        setLoading(false);
      }
    } catch (e: any) {
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
      <button type="submit">{isLoading ? 'Loading...' : 'Signup'}</button>
    </form>
  );
}

export { SignupForm };