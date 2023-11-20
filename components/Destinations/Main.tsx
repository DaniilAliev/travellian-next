import styles from './Main.module.scss';
import { selectOrder } from '@/slices/orderSlice';
import { useSelector } from 'react-redux';
import Form from './Form/Form';
import Item from './Item/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions as otelsActions } from '@/slices/otelsSlice';
import { selectors as otelsSelectors } from '@/slices/otelsSlice';
import Select from 'react-select';

export type Hotel = {
  adress: string,
  city: string,
  created_at: number,
  description: string,
  id: number,
  name: string,
  pictures: string[],
  price: number,
  rating: number,
};

const Main = () => {
  const orderState = useSelector(selectOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/destinations`);
      if (res.data) {
        console.log(true)
        const filtered = res.data.filter((item: Hotel) => item.city === orderState.destination);
        dispatch(otelsActions.addOtels(filtered));
      } 
    }

    fetchData();
  }, [orderState, dispatch])

  const hotels: Hotel[] = useSelector(otelsSelectors.selectAll) as Hotel[];

  const options = [
    { value: 'price-increase', label: 'Price increase' },
    { value: 'price-decrease', label: 'Price decrease' },
    { value: 'rating-increase', label: 'Rating increase' },
    { value: 'rating-decrease', label: 'Rating decrease' }
  ];

  const handleSortChange = (selectedOption: any) => {
    if (selectedOption) {
      const selectedSortOrder = selectedOption.value;
      sortHotels(hotels, selectedSortOrder);
    }
  };
  
  const sortHotels = (hotels: Hotel[], sortOrder: string) => {
    let sorted: Hotel[];
    switch (sortOrder) {
      case 'price-increase':
        sorted = [...hotels].sort((a, b) => a.price - b.price);
        dispatch(otelsActions.addOtels(sorted));
        break;
      case 'price-decrease':
        sorted = [...hotels].sort((a, b) => b.price - a.price);
        dispatch(otelsActions.addOtels(sorted));
        break;
      case 'rating-increase':
        sorted = [...hotels].sort((a, b) => a.rating - b.rating);
        dispatch(otelsActions.addOtels(sorted));
        break;
      case 'rating-decrease':
        sorted = [...hotels].sort((a, b) => b.rating - a.rating);
        dispatch(otelsActions.addOtels(sorted));
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <Form />
        <div className={styles['items-container']}>
          <div className={styles.sort}>
            <label><p>Sort By:</p></label>
            <Select
              options={options}
              onChange={handleSortChange}
              placeholder="Select an option"
              // isClearable={true}
            />
          </div>

          {hotels.map(((hotel : Hotel) => (
            <Item key={hotel.id} hotel={hotel}/>
          )))}
        </div>
      </div>
    </section>
  )
}

export default Main;