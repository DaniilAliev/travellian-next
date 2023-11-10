import { FC } from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './LoginPage.module.scss'
import SignupForm from './SignupForm/SignupForm';

interface LoginPage {
  type: string,
}

const LoginPage: FC<LoginPage> = ({type}) => {
  return(
    <section>
      <div className={styles.container}>
        <h1>{type === 'login' ? 'Login': 'Signup'}</h1>
        {type === 'login' ? <LoginForm /> : <SignupForm/>}
      </div>
    </section>
  )
}

export default LoginPage;
