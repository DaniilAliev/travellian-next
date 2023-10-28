import LoginForm from './LoginForm/LoginForm';
import styles from './LoginPage.module.scss'
import SignupForm from './SignupForm/SignupForm';

const LoginPage = ({type}: {type: string}) => {
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
