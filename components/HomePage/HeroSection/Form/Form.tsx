import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '../Button';
import styles from './Form.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '@/slices';
import { MyForm, options, customStyles, Option, Data } from './settings';
import { useRouter } from 'next/dist/client/router';
import { selectOrder } from '@/slices/orderSlice';
import moment from 'moment';

const Form = () => {
  const orderState = useSelector(selectOrder);

  const [startDate, setStartDate] = useState<Date | null>(
    new Date(moment(orderState.checkIn, 'DD/MM/YYYY').toDate())
    );
  const [leaveDate, setLeaveDate] = useState<Date | null>(
    new Date(moment(orderState.checkOut, 'DD/MM/YYYY').toDate())
    );

  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const dispatch = useDispatch();

  const router = useRouter();

  const { control, register, handleSubmit, formState: { errors } } = useForm<MyForm>({
    defaultValues: {
      destination: orderState.destination,
      guestsNumber: orderState.guestsNumber,
      checkIn: orderState.checkIn,
      checkOut: orderState.checkOut
    },
  })

  const submit = (data: MyForm) => {
    setIsSubmit(true)

    const checkInDateMoment = moment(data.checkIn, 'DD.MM.YYYY, HH:mm:ss');
    const checkOutDateMoment = moment(data.checkOut, 'DD.MM.YYYY, HH:mm:ss').clone().set({
      hour: checkInDateMoment.hour(),
      minute: checkInDateMoment.minute(),
      second: checkInDateMoment.second(),
    });
    
    const daysDiff = checkOutDateMoment.diff(checkInDateMoment, 'days');

    const dataToDispatch = {
      destination: data.destination,
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
                      field.onChange(option?.value);
                    }}
                    options={options}
                    className={`${styles.input} ${styles.customSelect}`}
                    styles={customStyles}
                    defaultInputValue={orderState.destination as string | undefined}
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
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      onChange={(date) => {
                        field.onChange(date?.toLocaleString());
                        console.log(date)
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
                      dateFormat="dd/MM/yyyy"
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

export { Form };
