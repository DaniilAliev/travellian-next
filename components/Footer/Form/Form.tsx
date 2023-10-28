import styles from './Form.module.scss';

const Form = () => 
  <div className={styles['newsletter-form-wrapper']}>
  <div className={styles['newsletter-form']}>
    <h1>Our Newsletter</h1>
    <form>
      <label htmlFor=""><p>Email</p></label>
      <div className={styles.inputs}>
        <input placeholder='Enter your email'></input>
        <button>Subscribe</button>
      </div>
    </form>
  </div>
  </div>
;

export default Form;