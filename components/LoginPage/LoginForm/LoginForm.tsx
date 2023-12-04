import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { useState } from 'react';
import errorStyles from '../errorStyles';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/generalSlice';

interface MyForm {
  email: string,
  password: string,
}

type LoginResult = {
  error: string | null;
  status: number;
};

const LoginForm = () => {
  const router = useRouter();

  const [customError, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {},
  })

  const submit = async (data: MyForm) => {
    try {
      setError(null);
      setLoading(true);

      const result: LoginResult = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        action: 'login',
      }) ?? { error: null, status: 0 };

      console.log(result)

      if (!result.error) {
        router.push('/');
      } else if (result?.status) {
        setError('Wrong email or password or user does not exist')
        setLoading(false)
      }

    } catch (e: any) {
      setLoading(false)
      if (e.response && e.response.data && e.response.data.message) {
        console.log(e.response.data.message);
        setError(e.response.data.message);
      } else {
        console.log('An error occurred:', e.message);
      }
    }
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit(submit)}>
      <div>
        <div>
          <label htmlFor="login"><p>Login</p></label>
        </div>
        <input type="login" id="login" placeholder="Your login" {...register('email')} />
      </div>
      <div>
        <div>
          <label htmlFor="password"><p>Password</p></label>
        </div>
        <input type="password" id="password" placeholder="Your password" {...register('password')} />
      </div>
      {customError && <p style={errorStyles}>{customError}</p>}
      <button>{isLoading ? `Loading...` : `Login`}</button>
    </form>
  )
}

export default LoginForm;