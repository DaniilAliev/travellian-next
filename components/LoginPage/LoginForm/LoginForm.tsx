import styles from './LoginForm.module.scss'

const LoginForm = () => {
  return (
		<form className={styles['login-form']}>
			<div>
				<div>
					<label htmlFor="login"><p>Login</p></label>
				</div>
				<input type="login" id="login" placeholder="Your login"></input>
			</div>
			<div>
				<div>
					<label htmlFor="password"><p>Password</p></label>
				</div>
				<input type="password" id="password" placeholder="Your password"></input>
			</div>
			<button>Login</button>
		</form>
  )
}
export default LoginForm;