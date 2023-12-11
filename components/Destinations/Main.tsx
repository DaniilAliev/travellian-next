import styles from './Main.module.scss';
import { selectOrder } from '@/slices/orderSlice';
import { useSelector } from 'react-redux';
import { Form } from './Form';
import { Item } from './Item';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as otelsActions } from '@/slices/otelsSlice';
import { actions as favActions } from '@/slices/favouriteSlice';
import { selectors as otelsSelectors } from '@/slices/otelsSlice';
import { useSession } from 'next-auth/react';
import Select from 'react-select';
import axios from 'axios';
import { Hotel, HotelFavInfo } from '@/types/types';
import API_ROUTES from '@/routes/apiRoutes';
import sortHotels from './sortHotels';
import filter from './filter';

interface DestinationsProps {
  response: Hotel[];
}

export type OtelsActionsType = typeof otelsActions;

const Main: FC<DestinationsProps> = ({ response }) => {
  const orderState = useSelector(selectOrder);
  const minPrice = orderState.minPrice as number;
  const maxPrice = orderState.maxPrice as number;
  const guests = orderState.guestsNumber as string;
  const daysDiff = orderState.daysDiff as number;

  const dispatch = useDispatch();

  const {data} = useSession();

  useEffect(() => {

    const fetchFav = async () => {
      const resFav = await axios.get(`${API_ROUTES.URL}${API_ROUTES.FAVOURITE}`);
      const filtered = resFav.data.filter((item: HotelFavInfo) => item.user === data?.user?.email)
      dispatch(favActions.addFavs(filtered));
    }

    fetchFav();
 
      if (response) {
        const filtered = response.filter((item: Hotel) => item.city === orderState.destination);
        dispatch(otelsActions.addOtels(filtered));

        filter(filtered, dispatch, otelsActions, minPrice, maxPrice, guests, daysDiff);
    }

  }, [orderState, dispatch, minPrice, maxPrice, daysDiff, guests, response, data?.user?.email])

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
      sortHotels(hotels, selectedSortOrder, dispatch, otelsActions);
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
              isSearchable={false}
            />
          </div>

          {hotels.map(((hotel: Hotel) => (
            <Item key={hotel.id} hotel={hotel} data={data}/>
          )))}
        </div>
      </div>
    </section>
  )
}

export { Main };