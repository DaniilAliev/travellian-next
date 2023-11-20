import styles from './Main.module.scss';
import { selectOrder } from '@/slices/orderSlice';
import { useSelector } from 'react-redux';
import Form from './Form/Form';
import Item from './Item/Item';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions as otelsActions } from '@/slices/otelsSlice';
import { selectors as otelsSelectors } from '@/slices/otelsSlice';

type Hotel = {
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
        const filtered = res.data.filter((item) => item.city === orderState.destination);
        console.log(filtered);
        dispatch(otelsActions.addOtels(filtered));
      } 
    }

    fetchData();
  }, [orderState, dispatch])

  const hotels = useSelector(otelsSelectors.selectAll);
  console.log(hotels);

  return (
    <section>
      <div className={styles.container}>
        <Form />
        <div className={styles['items-container']}>
          <div className={styles.sort}>
            <label><p>Sort By:</p></label>
            <select name="Sort by:" id="sort-select">
              <option value="">Price increase</option>
              <option value="">Price decrease</option>
              <option value="">Rating increase</option>
              <option value="">Rating decrease</option>
            </select>
          </div>

          {hotels.map((hotel => (
            <Item key={hotel.id} hotel={hotel}/>
          )))}

          {/* <Item />
          <Item />
          <Item /> */}
        </div>
      </div>
    </section>
  )
}

export default Main;