import { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import styles from './Form.module.scss';
import { Controller ,useForm } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};


const options: Option[] = [
  { value: 'Berlin', label: 'Berlin' },
  { value: 'London', label: 'London' },
  { value: 'Venice', label: 'Venice'},
  { value: 'Lisbon', label: 'Lisbon'},
  { value: 'Athens', label: 'Athens'},
  { value: 'Rome', label: 'Rome'},
  { value: 'Venice', label: 'Venice'},
  { value: 'Paris', label: 'Paris'},
  { value: 'Barcelona', label: 'Barcelona'},
  { value: 'Budapest', label: 'Budapest'},
]

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: 'none',
    borderBottom: `1px solid #000`,
    borderRadius: 0,
    boxShadow: state.isFocused ? '0 0 0 1px #FF7757' : 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none', 
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: '20px',
    fontFamily: 'Playfair',
    left: 0, 
    transform: 'none', 
    paddingLeft: 0, 
  }),
}

interface MyForm {
  destination: string,
  guestsNumber: number,
  checkIn: any,
  checkOut:any,
}

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [leaveDate, setLeaveDate] = useState(new Date());

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  
  const {control, register, handleSubmit } = useForm<MyForm>({
    defaultValues: {},
  })

  const submit = (data) => {
    console.log(data)
  }

  useEffect(() => {
    register('checkOut');
  }, [register]);

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
                  <Select {...field} onChange={handleChange} options={options} className={`${styles.input} ${styles.customSelect}`} styles={customStyles}/>
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
                      {...field}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
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
                        field.onChange(date);
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
