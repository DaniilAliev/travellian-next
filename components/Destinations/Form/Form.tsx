import Select, { SingleValue } from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { options, customStyles, Option } from '../../HomePage/HeroSection/Form/settings';
import { useState } from 'react';
import styles from './Form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrder } from '@/slices/orderSlice';
import { orderActions } from '@/slices';

type DataForm = {
  destination: string | null,
  guestsNumber: string | null,
  minPrice: number | null,
  maxPrice: number | null,
}

const Form = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const dispatch = useDispatch();

  const orderState = useSelector(selectOrder);
  const destination = orderState.destination;
  const guestsNumber = orderState.guestsNumber;

  const { control, register, handleSubmit, formState: { errors } } = useForm<DataForm>({
    defaultValues: {},
  })
	
	const handleChange = (option: Option) => {
    console.log(option)
    setSelectedOption(option);
  };

  const submit = (data: DataForm) => {
    console.log(data);
    if (data.destination) {
      dispatch(orderActions.changeCity(data.destination))
    } else {
      dispatch(orderActions.changeCity(destination))
    };

    if (data.guestsNumber) {
      dispatch(orderActions.changeGuestNumber(data.guestsNumber))
    } else {
      dispatch(orderActions.changeGuestNumber(guestsNumber))
    };

    if (data.minPrice) {
      dispatch(orderActions.setMinPrice(data.minPrice))
    } else {
      dispatch(orderActions.setMinPrice(null))
    };

    if (data.maxPrice) {
      dispatch(orderActions.setMaxPrice(data.maxPrice))
    } else {
      dispatch(orderActions.setMaxPrice(null))
    }
  }

  return ( 
  <form action="" className={styles['destination-form']} onSubmit={handleSubmit(submit)}>
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
      <input type="text" {...register('minPrice')}/>
    </div>

    <div>
      <label><p>Max price</p></label>
      <input type="text" {...register('maxPrice')}/>
    </div>

    <button><p>Submit</p></button>
  </form>)
}

export { Form };