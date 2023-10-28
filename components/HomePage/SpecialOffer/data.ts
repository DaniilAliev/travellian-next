import AthensImg from '../../../public/specialOfferAthens.jpeg';
import LisbonImg from '../../../public/specialOfferLisbon.jpeg';
import RomeImg from '../../../public/specialOfferRome.jpeg';
import BerlinImg from '../../../public/Berlin.jpg';
import { ComponentsType } from 'next/dist/build/webpack/loaders/next-app-loader';

export type SpecialOfferData = {
  city: string,
  country: string,
  price: string,
  img: any
}

const specialOfferData: SpecialOfferData[] = [
  {
    city: 'Lisbon',
    country: 'Portugal',
    price: '500',
    img: LisbonImg
  },
  {
    city: 'Athens',
    country: 'Greece',
    price: '800',
    img: AthensImg,
  },
  {
    city: 'Rome',
    country: 'Italy',
    price: '650',
    img: RomeImg,
  },
  {
    city: 'Berlin',
    country: 'Germany',
    price: '850',
    img: BerlinImg,
  },
];

export default specialOfferData;

