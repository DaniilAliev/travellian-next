import styles from './SignupForm.module.scss';

const SignupForm = () => {
  return (
		<form className={styles['signup-form']}>
			<div>
				<label htmlFor="login">
					<p>Login</p>
				</label>
				<input type="text" id="login" placeholder="Your login" />
			</div>
			<div>
				<label htmlFor="password">
					<p>Password</p>
				</label>
				<input type="password" id="password" placeholder="Your password" />
			</div>
			<div>
				<label htmlFor="confirm-password">
					<p>Confirm password</p>
				</label>
				<input type="password" id="confirm-password" placeholder="Confirm password" />
			</div>
			<button type="submit">Signup</button>
		</form>
	);	
}

export default SignupForm;