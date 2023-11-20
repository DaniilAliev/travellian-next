import Select, { SingleValue } from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { MyForm, options, customStyles, Option, Data } from '../../HomePage/HeroSection/Form/settings';
import { useState } from 'react';
import styles from './Form.module.scss';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const { control, register, handleSubmit, formState: { errors } } = useForm<MyForm>({
    defaultValues: {},
  })
	
	const handleChange = (option: Option) => {
    console.log(option)
    setSelectedOption(option);
  };

  return ( 
  <form action="" className={styles['destination-form']}>
    <div>
      <label><p>Destination</p></label>
      <Controller
          control={control}
          name="destination"
          render={({ field }) => (
            <Select
              onChange={(newValue: SingleValue<Option>) => {
                const option: Option | null = newValue as Option;
                handleChange(option);
                field.onChange(option?.value);
              }}
              options={options}
              className={`${styles.input} ${styles.customSelect}`}
              styles={customStyles}
            />
          )}
        />
    </div>

    <div>
      <label><p>Person</p></label>
      <select className={styles.select} {...register('guestsNumber')}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>

    <div>
      <label><p>Min price</p></label>
      <input type="text" />
    </div>

    <div>
      <label><p>Max price</p></label>
      <input type="text" />
    </div>

    <button><p>Submit</p></button>
  </form>)
}

export default Form;