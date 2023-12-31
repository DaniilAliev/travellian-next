import { Session } from 'next-auth';

export type HotelFavInfo = {
  user: string,
  name: string,
  hotelId: number,
  adress: string,
  rating: number,
}

export type Hotel = HotelFavInfo & {
  city: string,
  created_at: number,
  description: string,
  id: number,
  pictures: string[],
  price: number,
  guests: string,
  daysDiff: number,
  checkIn: string,
  checkOut: string,
};

export interface ItemProps {
  hotel: Hotel;
  data: Session | null;
};

export type AuthResult = {
  error: string | null;
  status: number;
};

export interface MyForm {
  email: string,
  password: string,
  confirm: string,
}

export type Styles = {
  [key: string]: string | undefined;
};