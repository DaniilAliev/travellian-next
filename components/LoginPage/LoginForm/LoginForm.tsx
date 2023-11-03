import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { useState } from 'react';
import axios from 'axios';
import API_ROUTES from '@/routes/apiRoutes';
import errorStyles from '../errorStyles';

interface MyForm {
  email: string,
  password: string,
}

const LoginForm = () => {
  const [customError, setError] = useState(null);

  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {},
  })

  const submit = async (data) => {
    try {
      setError(null);

      const dataToSignUp = {
        email: data.email,
        password: data.password,
      };

      console.log(dataToSignUp);

      const response = await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2${API_ROUTES.LOGIN}`, dataToSignUp);

      console.log(response);

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
      <button>Login</button>
    </form>
  )
}

export default LoginForm;