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
];

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
};

export interface MyForm {
  destination: string,
  guestsNumber: number,
  checkIn: any,
  checkOut:any,
};

export {options, customStyles};
