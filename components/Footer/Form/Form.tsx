import styles from './Form.module.scss';
import schema from './validation';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'; 
import { useDispatch } from 'react-redux';
import { actions as modalActions } from '@/slices/modalSlice';

interface Form {
  email: string,
}

const Form = () => {
  const dispatch = useDispatch()
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Form>({
    defaultValues: {},
    resolver: yupResolver(schema) as any,
    mode: "onSubmit",
  })

  const submit = (data: Form) => {
    console.log(data);
    dispatch(modalActions.openModal({
      type: 'newsletter',
      info: null,
    }))
  }

  return (
  <div className={styles['newsletter-form-wrapper']}>
  <div className={styles['newsletter-form']}>
    <h1>Our Newsletter</h1>
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor=""><p>Email</p></label>
        <div className={styles.inputs}>
          <input placeholder='Enter your email' {...register('email')}/>
          <button>Subscribe</button>
        </div>
      </form>
      {errors.email && <p className={styles.error}>{errors.email?.message}</p>}
    </div>
  </div>
  </div>)}

export { Form };