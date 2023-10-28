export type DestinationsData = {
  name: string,
  location: string,
  img: `${string}.jpeg`
}

export const destinationsData: DestinationsData[] = [
  {
    name: 'Monument of Berlin',
    location: 'Berlin, Germany',
    img: 'Berlin.jpeg',
  }, 
  {
    name: 'Millennium Bridge',
    location: 'London, United Kingdom',
    img: 'UK.jpeg',
  }, 
  {
    name: 'Rialto Bridge',
    location: 'Venice, Italy',
    img: 'Italy.jpeg',
  }, 
  {
    name: 'Sea of Orange Tiles',
    location: 'Lisbon, Portugal',
    img: 'Portugal.jpeg',
  }
];