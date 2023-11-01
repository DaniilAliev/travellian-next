import { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import styles from './Form.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { orderActions } from '@/slices';
import { Option, MyForm, options, customStyles } from './settings';


const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [leaveDate, setLeaveDate] = useState(new Date());

  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const { control, register, handleSubmit, formState: { errors } } = useForm<MyForm>({
    defaultValues: {},
  })

  const submit = (data) => {
    console.log(data);
    dispatch(orderActions.addOrder(data))
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
                    onChange={(option) => {
                      handleChange(option);
                      field.onChange(option.value);
                    }
                    }
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

          <Button />
        </form>
      </div>
    </div>
  );
}

export default Form;
