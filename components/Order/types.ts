export type HotelOrder = {
  id: number,
  hotelId: number,
  created_at: number,
  user: string,
  name: string,
  adress: string,
  price: number,
  guests: string,
  daysDiff: number,
  checkIn: string,
  checkOut: string,
}