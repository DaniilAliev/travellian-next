import { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import styles from './Form.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '@/slices';
import { MyForm, options, customStyles, Option, Data } from './settings';
import { useRouter } from 'next/dist/client/router';
import { selectOrder } from '@/slices/orderSlice';
import { initialState } from '@/slices/orderSlice';
import moment from 'moment';

const Form = () => {
  const orderState = useSelector(selectOrder);

  const [startDate, setStartDate] = useState<Date | null>(new Date(initialState.checkIn));
  const [leaveDate, setLeaveDate] = useState<Date | null>(new Date(initialState.checkOut));

  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const dispatch = useDispatch();

  const router = useRouter();

  const handleChange = (option: Option) => {
    console.log(option)
    setSelectedOption(option);
  };

  const { control, register, handleSubmit, formState: { errors } } = useForm<MyForm>({
    defaultValues: {},
  })

  const submit = (data: Data) => {
    setIsSubmit(true)

    const destination = data.destination ? data.destination : orderState.destination;
    
    const checkInDate = data.checkIn ? data.checkIn : orderState.checkIn;
    
    const checkOutDate = data.checkOut ? data.checkOut : orderState.checkOut;
    

    const checkInDateMoment = moment(checkInDate, 'DD.MM.YYYY, HH:mm:ss');
    const checkOutDateMoment = moment(checkOutDate, 'DD.MM.YYYY, HH:mm:ss');
    
    const daysDiff = checkOutDateMoment.diff(checkInDateMoment, 'days');

    const dataToDispatch = {
      destination,
      guestsNumber: data.guestsNumber,
      daysDiff,
      checkIn: checkInDateMoment,
      checkOut: checkOutDateMoment,
    }

    dispatch(orderActions.addOrder(dataToDispatch));
    router.push('/destinations');
  }

  return (
    <div className={styles["search-form-container"]}>
      <div className={styles['flex-container']}>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles['form-container']}>
            <div>
              <label><p>Destination</p></label>
              <Controller
                control={control}
                name="destination"
                render={({ field }) => (
                  <Select
                    onChange={(newValue) => {
                      const option: Option | null = newValue as Option;
                      handleChange(option);
                      field.onChange(option?.value);
                    }}
                    options={options}
                    className={`${styles.input} ${styles.customSelect}`}
                    styles={customStyles}
                    defaultInputValue={orderState.destination}
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
              <label><p>Check-in</p></label>
              <div className={styles.select}>
                <Controller
                  control={control}
                  name="checkIn"
                  render={({ field }) => (
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        field.onChange(date?.toLocaleString());
                        setStartDate(date);
                      }}
                      className={styles.datepicker}
                    />
                  )}
                />
              </div>
            </div>

            <div>
              <label><p>Check-out</p></label>
              <div className={styles.select}>
                <Controller
                  control={control}
                  name="checkOut"
                  render={({ field }) => (
                    <DatePicker
                      onChange={(date) => {
                        field.onChange(date?.toLocaleString());
                        setLeaveDate(date);
                      }}
                      selected={leaveDate}
                      className={styles.datepicker}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <Button isSubmit={isSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default Form;
