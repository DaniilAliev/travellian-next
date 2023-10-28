import Rome from '../../../public/RomeCityTour.jpeg';
import Paris from '../../../public/ParisCityTour.jpeg';
import Barcelona from '../../../public/BarcelonaCityTour.jpeg';
import Budapest from '../../../public/BudapestCityTour.jpeg';
import Athens from '../../../public/specialOfferAthens.jpeg';

export type TripPlanners = {
	city: string,
  price: `€${number}`,
  img: any,
}

const tripPlanners: TripPlanners[] = [
    {
        city: 'Rome',
        price: '€99',
        img: Rome,
    },
    {
        city: 'Paris',
        price: '€95',
        img: Paris,
    },
    {
        city: 'Bracelona',
        price: '€89',
        img: Barcelona,
    },
    {
        city: 'Budapest',
        price: '€89',
        img: Budapest,
    },
    {
        city: 'Athens',
        price: '€79',
        img: Athens,
    },
];

export default tripPlanners;